import { useState } from "react";
import { TIME_LINE_ITEMS } from "@constants/TIME_LINE_ITEMS";
import { TimelineItem } from "src/types";

const DAYS_VISIBLE = 14;

export const useTimeLine = () => {
  const today = new Date();
  const [startDate, setStartDate] = useState(today);
  const [events, setEvents] = useState<TimelineItem[]>(TIME_LINE_ITEMS);
  const [modalOpen, setModalOpen] = useState(false);
  const [clickedDate, setClickedDate] = useState<Date>(today);
  const [numberOfDays, setNumberOfDays] = useState(DAYS_VISIBLE);
  const [selectedEvent, setSelectedEvent] = useState<TimelineItem | null>(null);

  const days = Array.from({ length: numberOfDays }, (_, i) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    return date;
  });

  const handlePrev = () => {
    const newStart = new Date(startDate);
    newStart.setDate(newStart.getDate() - numberOfDays);
    setStartDate(newStart);
  };

  const handleNext = () => {
    const newStart = new Date(startDate);
    newStart.setDate(newStart.getDate() + numberOfDays);
    setStartDate(newStart);
  };

  const handleToday = () => {
    setStartDate(today);
  };

  const handleCreateEvent = (newEvent: {
    title: string;
    startDate: string;
    endDate: string;
    color: string;
  }) => {
    const newItem: TimelineItem = {
      id: events.length + 1,
      name: newEvent.title,
      start: newEvent.startDate,
      end: newEvent.endDate,
      color: newEvent.color
    };
    setEvents((prev) => [...prev, newItem]);
  };

  const handleEditEvent = (updatedEvent: TimelineItem) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
  };

  return {
    startDate,
    numberOfDays,
    days,
    events,
    modalOpen,
    clickedDate,
    handlePrev,
    setNumberOfDays,
    handleNext,
    handleToday,
    handleCreateEvent,
    setModalOpen,
    setClickedDate,
    selectedEvent,
    handleEditEvent,
    setSelectedEvent
  };
};
