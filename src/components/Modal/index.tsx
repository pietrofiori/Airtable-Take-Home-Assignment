import { ReactNode } from "react";
import * as S from "./styles";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  width?: string;
  height?: string;
  children: ReactNode;
}

export const Modal = ({
  open,
  onClose,
  width,
  height,
  children
}: ModalProps) => {
  if (!open) return null;

  return (
    <S.Overlay onClick={onClose}>
      <S.ModalContent
        $height={height}
        $width={width}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </S.ModalContent>
    </S.Overlay>
  );
};
