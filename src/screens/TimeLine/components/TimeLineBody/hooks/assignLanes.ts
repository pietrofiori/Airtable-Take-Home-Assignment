import { TimelineItem } from "src/types";

export function assignLanes(items: TimelineItem[]) {
  const sortedItems = [...items].sort(
    (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
  );

  const lanes: TimelineItem[][] = [];

  for (const item of sortedItems) {
    let placed = false;

    for (const lane of lanes) {
      const hasOverlap = lane.some((existing) => {
        const start1 = new Date(item.start);
        const end1 = new Date(item.end);
        const start2 = new Date(existing.start);
        const end2 = new Date(existing.end);

        return !(end1 < start2 || start1 > end2);
      });

      if (!hasOverlap) {
        lane.push(item);
        placed = true;
        break;
      }
    }

    if (!placed) {
      lanes.push([item]);
    }
  }

  return lanes;
}
