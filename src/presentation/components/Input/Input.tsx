import type { InputProps } from "../../../domain/input";
import './Input.css'

const Input = ({ hasLabel = true, id, onChange, placeholder, text, type = "text", value }: InputProps) => {
  return (
    <div className="input-container">
        {hasLabel && <label className={hasLabel ? "label" : "label hide"} htmlFor={id}>{text}</label>}
        <input className="input" type={type} id={id} name={id} placeholder={placeholder} value={value} onChange={(event) =>onChange(event)}  />
    </div>
  );
};

export default Input;