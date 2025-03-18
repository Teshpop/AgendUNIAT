import { useForm } from "react-hook-form";
import { BookingFormData } from "../types/booking.types";

export const useBookingForm = (selectedDate: Date, selectedTime: string) => {
  // Convertir a formato ISO 8601
  const isoDate = selectedDate.toISOString().split("T")[0];
  const isoDateTime = `${isoDate}T${selectedTime}:00`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>({
    defaultValues: {
      date: isoDate,
      time: selectedTime,
    },
  });

  const validations = {
    name: {
      required: "El nombre es requerido",
    },
    email: {
      required: "El correo es requerido",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Correo electrónico inválido",
      },
    },
    phone: {
      required: "El teléfono es requerido",
      pattern: {
        value: /^[0-9]{10}$/,
        message: "Debe ser un número de 10 dígitos",
      },
    },
  };

  return {
    register,
    handleSubmit,
    errors,
    validations,
    isoDateTime,
  };
};
