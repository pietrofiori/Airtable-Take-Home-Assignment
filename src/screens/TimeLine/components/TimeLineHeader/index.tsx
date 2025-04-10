import { useRef } from "react";
import * as S from "./styles";
import { useSlider } from "./hooks/useSlider";
import { useTimelineDays } from "./hooks/useTimelineDays";

export interface TimelineHeaderProps {
  startDate: Date;
  numberOfDays: number;
  onPrev: () => void;
  onNext: () => void;
  onToday: () => void;
  onChangeDays: (days: number) => void;
}

export const TimelineHeader = ({
  startDate,
  numberOfDays,
  onPrev,
  onNext,
  onToday,
  onChangeDays
}: TimelineHeaderProps) => {
  const { days, months } = useTimelineDays(startDate, numberOfDays);
  const { handleMouseDown, handleMouseMove, handleMouseUp } = useSlider(
    onPrev,
    onNext
  );

  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <S.ControlsWrapper>
        <S.MonthsRow>
          {months.map((month, i) => (
            <S.MonthCell key={i} $flex={month.colSpan}>
              {month.label}
            </S.MonthCell>
          ))}
        </S.MonthsRow>
        <S.Controls>
          <S.Select
            value={numberOfDays}
            onChange={(e) => onChangeDays(Number(e.target.value))}
          >
            <option value={7}>1 week</option>
            <option value={14}>2 weeks</option>
            <option value={21}>3 weeks</option>
          </S.Select>
          <S.TodayButton onClick={onToday}>Today</S.TodayButton>
          <S.NavButton onClick={onPrev}>{"<"}</S.NavButton>
          <S.NavButton onClick={onNext}>{">"}</S.NavButton>
        </S.Controls>
      </S.ControlsWrapper>

      <S.HeaderWrapper
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <S.Row>
          {days.map((d, i) => (
            <S.DayCell key={i}>
              <strong>{d.date.getDate()}</strong>
              <span>{d.day}</span>
            </S.DayCell>
          ))}
        </S.Row>
      </S.HeaderWrapper>
    </>
  );
};
