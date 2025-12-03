type FormRowProps = {
  inputClassName?: string;
  type: string;
  name: string;
  labelText?: string;
  defaultValue?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const FormRow = ({
  inputClassName = "",
  type,
  name,
  labelText,
  defaultValue,
  onChange,
}: FormRowProps) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className={`form-input ${inputClassName}`}
        defaultValue={defaultValue || ""}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default FormRow;
