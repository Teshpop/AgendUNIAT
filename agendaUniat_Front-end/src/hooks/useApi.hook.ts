import { useEffect, useState } from "react";
import axios from "axios";

interface Booking {
  dayAppointment: string;
  roomType: "GREEN" | "AUDIO";
}

export const useApi = (roomType: "GREEN" | "AUDIO") => {
  const ENDPOINT: string = "http://127.0.0.1:8000/calendar/";
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchBookings = async () => {
    setIsLoading(true);
    setError(false);

    try {
      const response = await axios.get(ENDPOINT);
      // Filtramos las reservaciones por tipo de sala
      const roomBookings = response.data.filter(
        (booking: Booking) => booking.roomType === roomType
      );
      setBookings(roomBookings);
    } catch (error) {
      setError(true);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [roomType]);

  return { bookings, isLoading, error, refetch: fetchBookings };
};
