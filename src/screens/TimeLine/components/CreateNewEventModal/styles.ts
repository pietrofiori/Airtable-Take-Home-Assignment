import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.dark.dark2};
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.dark.dark3};
  }
`;

export const Input = styled.input`
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.light.light4};
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.blue[500]};
  }
`;

export const ColorInput = styled(Input)`
  padding: 0;
  width: 50px;
  height: 32px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 12px;
`;

export const CreateButton = styled.button`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.blue[500]};
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue[600]};
  }
`;

export const CancelButton = styled.button`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.light.light4};
  color: ${({ theme }) => theme.colors.dark.dark3};
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
`;
