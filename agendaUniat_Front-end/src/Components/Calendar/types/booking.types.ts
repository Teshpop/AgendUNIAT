export interface ConfirmationPanelProps {
  selectedDate: Date;
  selectedTime: string;
  onClose: () => void;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
}
