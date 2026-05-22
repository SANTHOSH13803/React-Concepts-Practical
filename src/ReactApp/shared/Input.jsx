function Input({
  label,
  placeholder = "",
  value,
  onChange,
  type = "text",
  error,
  disabled = false
}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}

      <input
        type={type}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        className={`
          px-4
          py-2
          border
          rounded-lg
          outline-none
          transition
          w-full

          ${error ? "border-red-500" : "border-gray-300"}

          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-200

          ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}
        `}
      />

      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}

export default Input;
