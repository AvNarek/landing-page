import './Input.css';

const Input = ({
  type,
  value,
  name,
  className,
  placeholder,
  onChange,
  onClick,
}) => {
  return (
    <input
      type={type}
      value={value}
      id={name}
      className={`input ${className}`}
      placeholder={placeholder}
      onChange={onChange}
      onClick={onClick}
    />
  );
};

export default Input;
