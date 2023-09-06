import { DateTime } from "luxon";

export const secondsToDate = (seconds: number): Date => {
  const dateTime = DateTime.fromSeconds(seconds);
  return dateTime.toJSDate();
};

export const differenceInMinutes = (date1: Date, date2: Date): number => {
  const diff = date1.getTime() - date2.getTime();
  return Math.floor(diff / 1000);
};
