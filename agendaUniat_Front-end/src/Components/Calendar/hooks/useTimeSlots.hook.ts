import { useMemo } from "react";

export const useTimeSlots = (selectedDate: Date) => {
  const availableHours = useMemo(
    () => [
      "7:00",
      "8:00",
      "9:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
    ],
    []
  );

  const isToday = selectedDate?.toDateString() === new Date().toDateString();
  const currentHour = new Date().getHours();

  const isHourAvailable = (hour: string) => {
    const hourNumber = parseInt(hour.split(":")[0]);
    if (isToday) {
      return hourNumber > currentHour;
    }
    return true;
  };

  return {
    availableHours,
    isHourAvailable,
  };
};
