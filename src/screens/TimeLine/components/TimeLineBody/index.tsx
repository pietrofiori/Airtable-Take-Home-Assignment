import { useState } from "react";
import * as S from "./styles";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import { TimelineItem } from "src/types";
import { assignLanes } from "./hooks/assignLanes";
import { Typography } from "@components/Typography";

export interface TimeLineBodyProps {
  startDate: Date;
  numberOfDays: number;
  days: Date[];
  events: TimelineItem[];
  onClickEmpty: (date: Date) => void;
  onEdit: (event: TimelineItem) => void;
}

export const TimelineBody = ({
  days,
  events,
  onEdit,
  onClickEmpty
}: TimeLineBodyProps) => {
  const lanes = assignLanes(events);

  const getDayIndex = (targetDate: Date) =>
    days.findIndex(
      (d) => d.toDateString() === new Date(targetDate).toDateString()
    );

  return (
    <S.BodyWrapper $columns={days.length}>
      {lanes.map((lane, laneIndex) => (
        <S.Lane key={laneIndex}>
          {days.map((date, colIndex) => {
            const item = lane.find((event) => {
              const start = new Date(event.start);
              const end = new Date(event.end);
              const currentDate = days[colIndex];

              const isStartVisible =
                start.toDateString() === currentDate.toDateString();
              const isHiddenStartButEndVisible =
                start < days[0] &&
                end >= currentDate &&
                getDayIndex(end) !== -1;

              return (
                isStartVisible || (colIndex === 0 && isHiddenStartButEndVisible)
              );
            });

            if (item) {
              const rawStart = new Date(item.start);
              const rawEnd = new Date(item.end);

              const startIndex = getDayIndex(rawStart);
              const endIndex = getDayIndex(rawEnd);

              const safeStart = startIndex !== -1 ? startIndex : 0;
              const safeEnd = endIndex !== -1 ? endIndex : days.length - 1;

              const span = safeEnd - safeStart + 2;

              const [editing, setEditing] = useState(false);
              const [editedTitle, setEditedTitle] = useState(item.name);

              return (
                <>
                  {item && (
                    <S.EventItem
                      key={item.id}
                      style={{ gridColumn: `${safeStart + 1} / span ${span}` }}
                      $color={item.color}
                      title={item.name}
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditing(true);
                      }}
                    >
                      {editing ? (
                        <S.EditInput
                          autoFocus
                          value={editedTitle}
                          onChange={(e) => setEditedTitle(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                          onBlur={() => {
                            setEditing(false);
                            if (
                              editedTitle.trim() &&
                              editedTitle !== item.name
                            ) {
                              onEdit({ ...item, name: editedTitle });
                            }
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              setEditing(false);
                              if (
                                editedTitle.trim() &&
                                editedTitle !== item.name
                              ) {
                                onEdit({ ...item, name: editedTitle });
                              }
                            }
                          }}
                        />
                      ) : (
                        <>
                          <Typography fontWeight="bold" fontSize="bodySmall">
                            {item.name.length > 20
                              ? item.name.slice(0, 15) + "..."
                              : item.name}
                          </Typography>
                          <Typography fontSize="labelLarge">
                            {format(new Date(item.start), "MMMM d", {
                              locale: enUS
                            })}
                            {item.end !== item.start &&
                              ` – ${format(new Date(item.end), "MMMM d", { locale: enUS })}`}
                          </Typography>
                        </>
                      )}
                    </S.EventItem>
                  )}
                </>
              );
            }

            const isDateOccupied = lane.some((event) => {
              const start = new Date(event.start);
              const end = new Date(event.end);
              return date > start && date <= end;
            });

            return isDateOccupied ? (
              <div key={`filler-${colIndex}`} />
            ) : (
              <S.EmptyCell
                key={`empty-${colIndex}`}
                onClick={() => onClickEmpty(date)}
              />
            );
          })}
        </S.Lane>
      ))}
    </S.BodyWrapper>
  );
};
