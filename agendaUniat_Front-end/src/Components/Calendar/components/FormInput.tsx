interface FormInputProps {
  label: string;
  type: string;
  register: any;
  name: string;
  validation: any;
  error?: string;
}

export const FormInput = ({
  label,
  type,
  register,
  name,
  validation,
  error,
}: FormInputProps) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      {...register(name, validation)}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
      type={type}
    />
    {error && <span className="text-red-500 text-sm">{error}</span>}
  </div>
);
