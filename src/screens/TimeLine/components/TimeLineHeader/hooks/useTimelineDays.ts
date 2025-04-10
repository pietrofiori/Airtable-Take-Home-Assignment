export interface TimelineDay {
  date: Date;
  day: string;
  month: string;
}

export function useTimelineDays(
  startDate: Date,
  numberOfDays: number
): {
  days: TimelineDay[];
  months: { label: string; colSpan: number }[];
} {
  const days: TimelineDay[] = [];

  for (let i = 0; i < numberOfDays; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);

    days.push({
      date,
      day: date.toLocaleDateString("en-US", { weekday: "short" }),
      month: date.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric"
      })
    });
  }

  const months: { label: string; colSpan: number }[] = [];
  let currentMonth = days[0].month;
  let count = 0;

  for (const day of days) {
    if (day.month === currentMonth) {
      count++;
    } else {
      months.push({ label: currentMonth, colSpan: count });
      currentMonth = day.month;
      count = 1;
    }
  }
  months.push({ label: currentMonth, colSpan: count });

  return { days, months };
}
