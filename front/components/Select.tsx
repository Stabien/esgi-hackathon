type Props = {
  name: string;
  value: string;
  options: { label: string; value: string }[];
  placeholder: string;
  onChange: (value: string) => void;
  className?: string;
};

const Select = ({
  value,
  options,
  placeholder,
  onChange,
  name,
  className,
}: Props) => {
  return (
    <select
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={(event) => {
        console.log("changed");

        onChange(event.target.value);
      }}
      className="w-full focus:bg-white py-2 px-4 text-neutral-500 border-none text-lg bg-pink-50 rounded"
    >
      {options.map((option) => (
        <option key={option.label} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
