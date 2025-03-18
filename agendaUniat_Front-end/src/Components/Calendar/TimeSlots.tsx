import { useApi } from "../../hooks/useApi.hook";
import { format } from "date-fns";

interface TimeSlotsProps {
  selectedDate: Date;
  selectedTime: string | null;
  onTimeSelect: (time: string) => void;
  onClose: () => void;
  roomType: "GREEN" | "AUDIO";
}

export const TimeSlots = ({
  selectedDate,
  selectedTime,
  onTimeSelect,
  onClose,
  roomType,
}: TimeSlotsProps) => {
  const { bookings, isLoading } = useApi(roomType);

  const availableHours = [
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
  ];

  const isTimeSlotBooked = (hour: string) => {
    const selectedDateStr = format(selectedDate, "yyyy-MM-dd");
    return bookings.some((booking) => {
      const bookingDate = booking.dayAppointment.split("T")[0];
      const bookingTime = booking.dayAppointment.split("T")[1].substring(0, 5);
      return bookingDate === selectedDateStr && bookingTime === hour;
    });
  };

  const isToday = selectedDate?.toDateString() === new Date().toDateString();
  const currentHour = new Date().getHours();

  const isHourAvailable = (hour: string) => {
    const hourNumber = parseInt(hour.split(":")[0]);
    if (isTimeSlotBooked(hour)) return false;
    if (isToday) {
      return hourNumber > currentHour;
    }
    return true;
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6">
          Cargando horarios disponibles...
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">
            Horarios disponibles para {selectedDate.toLocaleDateString()}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
          {availableHours.map((hour) => {
            const available = isHourAvailable(hour);
            const isBooked = isTimeSlotBooked(hour);
            return (
              <button
                key={hour}
                onClick={() => {
                  if (available && !isBooked) {
                    onTimeSelect(hour);
                    onClose();
                  }
                }}
                disabled={!available || isBooked}
                className={`p-3 rounded-md transition-colors duration-200
                  ${
                    selectedTime === hour
                      ? "bg-green-500 text-white"
                      : isBooked
                      ? "bg-red-100 text-red-400 cursor-not-allowed"
                      : available
                      ? "bg-gray-100 hover:bg-gray-200"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed opacity-50"
                  }`}
              >
                {hour}
                {isBooked && <span className="block text-xs">Ocupado</span>}
              </button>
            );
          })}
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
