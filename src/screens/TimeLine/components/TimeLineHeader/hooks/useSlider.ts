import { useState } from "react";

export function useSlider(onPrev: () => void, onNext: () => void) {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState<number | null>(null);
  const dragThreshold = 40;

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || startX === null) return;

    const deltaX = e.clientX - startX;

    if (deltaX > dragThreshold) {
      onPrev();
      setIsDragging(false);
    }

    if (deltaX < -dragThreshold) {
      onNext();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setStartX(null);
  };

  return {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp
  };
}
