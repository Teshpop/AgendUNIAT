import { FormInput } from "./components/FormInput";
import { useBookingForm } from "./hooks/useBookingForm.hook";
import { ConfirmationPanelProps, BookingFormData } from "./types/booking.types";

export const ConfirmationPanel = ({
  selectedDate,
  selectedTime,
  onClose,
}: ConfirmationPanelProps) => {
  const { register, handleSubmit, errors, validations, isoDateTime } =
    useBookingForm(selectedDate, selectedTime);

  const onSubmit = (data: BookingFormData) => {
    console.log("Datos de la reservación:", {
      ...data,
      dateTime: isoDateTime,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">
            Confirmar Reservación
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

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormInput
            label="Nombre completo"
            type="text"
            register={register}
            name="name"
            validation={validations.name}
            error={errors.name?.message}
          />

          <FormInput
            label="Correo electrónico"
            type="email"
            register={register}
            name="email"
            validation={validations.email}
            error={errors.email?.message}
          />

          <FormInput
            label="Número de teléfono"
            type="tel"
            register={register}
            name="phone"
            validation={validations.phone}
            error={errors.phone?.message}
          />

          <div className="text-gray-700">
            <p>Fecha ISO: {isoDateTime.split("T")[0]}</p>
            <p>Hora: {selectedTime}</p>
            <p className="text-sm text-gray-500">
              Fecha/Hora ISO: {isoDateTime}
            </p>
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors duration-200"
            >
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
