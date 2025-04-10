import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  background-color: ${({ theme }) => theme.colors.light.light1};
  padding: 0;
`;

export const Lane = styled.div`
  position: relative;
  height: 48px;
`;

export const Item = styled.div<{
  $left: number;
  $width: number;
}>`
  position: absolute;
  left: ${({ $left }) => $left}px;
  width: ${({ $width }) => $width}px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.blue[500]};
  color: white;
  font-size: 14px;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
