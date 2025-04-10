import styled from "styled-components";

interface EventItemProps {
  $color?: string;
}

export const BodyWrapper = styled.div<{ $columns: number }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  --columns: ${({ $columns }) => $columns};
`;

export const Lane = styled.div`
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  position: relative;
  min-height: 48px;
  padding: 6px 0;
`;

export const EmptyCell = styled.div`
  cursor: pointer;
  pointer-events: auto;
`;

export const EditInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: 20px;
  padding: 12px 0;
  font-size: 1.4rem;
  line-height: 1.2;
  color: white;
  font-weight: bold;
`;
export const EventItem = styled.div<EventItemProps>`
  background-color: ${({ $color, theme }) => $color ?? theme.colors.blue[500]};
  color: white;
  border-radius: 8px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 12px;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 55px;
  overflow: hidden;
`;
