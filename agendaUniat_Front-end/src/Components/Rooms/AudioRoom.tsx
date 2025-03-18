import { useRoomBooking } from "./hooks/useRoomBooking.hook";
import { CustomCalendar, TimeSlots, ConfirmationPanel } from "../Calendar";

const AudioRoom = () => {
  const {
    selectedDate,
    selectedTime,
    showTimeSlots,
    showConfirmation,
    handleDateSelect,
    handleTimeSelect,
    handleCloseTimeSlots,
    handleCloseConfirmation,
  } = useRoomBooking();

  return (
    <section className="h-screen w-full">
      <h1 className="text-center text-5xl font-bold text-white bg-blue-500 py-4">
        Audio Room
      </h1>
      <CustomCalendar
        selectedDate={selectedDate}
        onDateSelect={handleDateSelect}
      />

      {showTimeSlots && selectedDate && (
        <TimeSlots
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          onTimeSelect={handleTimeSelect}
          onClose={() => handleCloseTimeSlots()}
          roomType="GREEN"
        />
      )}

      {showConfirmation && selectedDate && selectedTime && (
        <ConfirmationPanel
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          onClose={handleCloseConfirmation}
        />
      )}
    </section>
  );
};

export default AudioRoom;
