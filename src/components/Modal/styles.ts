import styled from "styled-components";

interface ModalContentProps {
  $width?: string;
  $height?: string;
}

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div<ModalContentProps>`
  background: ${({ theme }) => theme.colors.light.light1};
  padding: 24px;
  border-radius: 8px;
  overflow: auto;

  max-width: 90vw;
  max-height: 90vh;

  width: ${({ $width }) => $width ?? "auto"};
  height: ${({ $height }) => $height ?? "auto"};
`;
