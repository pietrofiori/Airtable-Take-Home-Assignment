import styled from "styled-components";

export const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.light.light1};
  border-bottom: 2px solid ${({ theme }) => theme.colors.light.light2};
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.dark.dark3};
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Select = styled.select`
  padding: 10px;
  border-radius: 4px;
  border: none;
  background: ${({ theme }) => theme.colors.light.light1};

  cursor: pointer;
`;

export const TodayButton = styled.button`
  background-color: ${({ theme }) => theme.colors.blue[500]};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 12px;
  font-size: 14px;
  cursor: pointer;
`;

export const NavButton = styled.button`
  background: transparent;
  border: none;
  padding: 5px 10px;
  font-size: 20px;
  border-radius: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.dark.dark4};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.light.light1};
  user-select: none;
  cursor: grab;
`;

export const MonthsRow = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`;

export const MonthCell = styled.div<{ $flex: number }>`
  flex: ${({ $flex }) => $flex};
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  padding: 6px 0;
  border-right: 1px solid ${({ theme }) => theme.colors.light.light4};
  color: ${({ theme }) => theme.colors.dark.dark3};
`;

export const Row = styled.div`
  display: flex;
  gap: 5rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 2%;
  flex-direction: row;
`;

export const DayCell = styled.div`
  text-align: center;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.dark.dark3};
`;
