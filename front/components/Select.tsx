type Props = {
  name: string;
  options: { label: string; value: string }[];
  placeholder: string;
  onChange: (value: string) => void;
  className?: string;
};

const Select = ({ options, placeholder, onChange, name, className }: Props) => {
  return (
    <select
      name={name}
      value={"Sans emploi"}
      placeholder={placeholder}
      onChange={(event) => {
        console.log("changed");

        onChange(event.target.value);
      }}
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
