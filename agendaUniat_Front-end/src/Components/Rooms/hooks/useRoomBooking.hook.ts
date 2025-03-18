import { useState } from "react";

export const useRoomBooking = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showTimeSlots, setShowTimeSlots] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
    setShowTimeSlots(true);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setShowConfirmation(true);
  };

  const handleCloseTimeSlots = () => setShowTimeSlots(false);
  const handleCloseConfirmation = () => setShowConfirmation(false);

  return {
    selectedDate,
    selectedTime,
    showTimeSlots,
    showConfirmation,
    handleDateSelect,
    handleTimeSelect,
    handleCloseTimeSlots,
    handleCloseConfirmation,
  };
};
