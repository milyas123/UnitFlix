const InputField = ({ name, label, type, placeholder, value, onChange, maxLength, required = false, className }) => {
  return (
    <div className={`w-full ${label && "flex flex-col gap-1"}`}>
      <label className="text-gray-700 text-[14px] md:text-[10px] xl:text-[12px] 2xl:text-[14px] font-semibold" htmlFor={label}>
        {label}
      </label>
      <input
        className={`text-[16px] p-3 md:text-[12px] xl:text-[14px] md:px-2 md:py-2.5 xl:p-3 2xl:text-[16px] 2xl:px-4 appearance-none border border-midGrey rounded-md w-full text-black leading-tight focus:outline-none focus:shadow-outline font-medium ${className}`}
        id={label}
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
