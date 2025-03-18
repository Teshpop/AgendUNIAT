import { useState } from "react";

interface UseCalendarLogicProps {
  onDateSelect: (date: Date) => void;
}

export const useCalendarLogic = ({ onDateSelect }: UseCalendarLogicProps) => {
  const today = new Date();
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  // Deshabilitar la selección de fines de semana
  const tileDisabled = ({ date }: { date: Date }) => {
    const day = date.getDay();
    return day === 0 || day === 6;
  };

  return {
    today,
    lastDayOfMonth,
    tileDisabled,
  };
};
