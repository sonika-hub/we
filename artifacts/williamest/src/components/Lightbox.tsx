import { useEffect, useCallback, useRef } from "react";

interface LightboxProps {
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      dx < 0 ? onNext() : onPrev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  }, [onPrev, onNext]);

  return (
    <div
      className="lb-overlay"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="lb-inner" onClick={e => e.stopPropagation()}>

        {/* Back button — top left, always prominent */}
        <button className="lb-back-btn" onClick={onClose} aria-label="Close">
          <i className="fas fa-arrow-left"></i>
          <span>Back</span>
        </button>

        {/* Counter — top right */}
        <div className="lb-counter">{index + 1} / {images.length}</div>

        {/* Image */}
        <img key={index} src={images[index]} alt="Full size" className="lb-img" />

        {/* Prev / Next — hidden on mobile, use swipe instead */}
        <button className="lb-arrow lb-arrow-prev" onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Previous">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="lb-arrow lb-arrow-next" onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next">
          <i className="fas fa-chevron-right"></i>
        </button>

        {/* Swipe hint — mobile only */}
        <div className="lb-swipe-hint">
          <i className="fas fa-hand-pointer"></i> Swipe to browse
        </div>
      </div>
    </div>
  );
}
