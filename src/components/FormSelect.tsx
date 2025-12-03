interface FormRowSelectProps {
  selectClassName?: string;
  name: string;
  labelText?: string;
  list: string[];
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FormRowSelect = ({
  selectClassName = "",
  name,
  labelText,
  list,
  defaultValue = "",
  onChange,
}: FormRowSelectProps) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        className={`form-select ${selectClassName}`}
        defaultValue={defaultValue}
        onChange={onChange}
      >
        {list.map((itemValue) => {
          return (
            <option key={itemValue} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormRowSelect;
