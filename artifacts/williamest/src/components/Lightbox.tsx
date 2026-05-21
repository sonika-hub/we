import { useEffect, useCallback } from "react";

interface LightboxProps {
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
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

  return (
    <div className="lb-overlay" onClick={onClose}>
      <div className="lb-inner" onClick={e => e.stopPropagation()}>
        <button className="lb-back-btn" onClick={onClose} aria-label="Close">
          <i className="fas fa-arrow-left"></i>
          <span>Back</span>
        </button>
        <div className="lb-counter">{index + 1} / {images.length}</div>
        <img key={index} src={images[index]} alt="Full size" className="lb-img" />
        <button className="lb-arrow lb-arrow-prev" onClick={onPrev} aria-label="Previous">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="lb-arrow lb-arrow-next" onClick={onNext} aria-label="Next">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
