import * as S from "./styles";
import { useTimeLine } from "./hooks/useTimeLine";
import { CreateNewEventModal } from "./components/CreateNewEventModal";
import { TimelineBody } from "./components/TimeLineBody";
import { TimelineHeader } from "./components/TimeLineHeader";

export const TimeLine = () => {
  const {
    startDate,
    numberOfDays,
    days,
    events,
    modalOpen,
    clickedDate,
    handlePrev,
    handleNext,
    handleToday,
    handleCreateEvent,
    setModalOpen,
    setNumberOfDays,
    handleEditEvent,
    setClickedDate
  } = useTimeLine();

  return (
    <S.Container>
      <TimelineHeader
        startDate={startDate}
        numberOfDays={numberOfDays}
        onPrev={handlePrev}
        onNext={handleNext}
        onToday={handleToday}
        onChangeDays={setNumberOfDays}
      />

      <TimelineBody
        startDate={startDate}
        numberOfDays={numberOfDays}
        days={days}
        events={events}
        onEdit={(event) => {
          handleEditEvent(event);
        }}
        onClickEmpty={(date) => {
          setClickedDate(date);
          setModalOpen(true);
        }}
      />

      <CreateNewEventModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultDate={clickedDate}
        onCreate={handleCreateEvent}
      />
    </S.Container>
  );
};
