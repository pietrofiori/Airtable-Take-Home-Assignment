import { useState } from "react";
import * as S from "./styles";
import { toast } from "sonner";
import { Modal } from "@components/Modal";

interface CreateNewEventModalProps {
  open: boolean;
  onClose: () => void;
  defaultDate: Date;
  onCreate: (event: {
    title: string;
    startDate: string;
    endDate: string;
    color: string;
  }) => void;
}

export const CreateNewEventModal = ({
  open,
  onClose,
  defaultDate,
  onCreate
}: CreateNewEventModalProps) => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState(
    defaultDate.toISOString().slice(0, 10)
  );
  const [endDate, setEndDate] = useState(
    defaultDate.toISOString().slice(0, 10)
  );
  const [color, setColor] = useState("#007bff");

  const handleCreate = () => {
    if (!title) return toast.error("Please enter a title");
    onCreate({ title, startDate, endDate, color });
    setTitle("");
    setStartDate(defaultDate.toISOString().slice(0, 10));
    setEndDate(defaultDate.toISOString().slice(0, 10));
    setColor("#007bff");
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} width="400px">
      <S.ModalContainer>
        <h2>Create new event</h2>

        <S.InputGroup>
          <label htmlFor="title">Event Title</label>
          <S.Input
            id="title"
            type="text"
            placeholder="e.g. Meeting"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </S.InputGroup>

        <S.InputGroup>
          <label htmlFor="date">Start Date</label>
          <S.Input
            id="date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="end-date">End Date</label>
          <S.Input
            id="end-date"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </S.InputGroup>

        <S.InputGroup>
          <label htmlFor="color">Color</label>
          <S.ColorInput
            id="color"
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </S.InputGroup>

        <S.Actions>
          <S.CreateButton onClick={handleCreate}>Create</S.CreateButton>
          <S.CancelButton onClick={onClose}>Cancel</S.CancelButton>
        </S.Actions>
      </S.ModalContainer>
    </Modal>
  );
};
