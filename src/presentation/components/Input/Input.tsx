import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import type { InputProps } from "../../../domain/input";
import './Input.css'

const Input = ({ hasLabel = true, id, onChange, placeholder, text, type = "text", value }: InputProps) => {
  const isTextInput = type === "text";
  
  return (
    <div className="input-container">
      {isTextInput && (
        <figure className="input-icon" aria-hidden="true">
          <FontAwesomeIcon icon={faSearch} size="xs" />
        </figure>
      )}
      {hasLabel && (
        <label className={hasLabel ? "label" : "label hide"} htmlFor={id}>{text}</label>
      )}
      <input className={isTextInput ? 'input text' : 'input'} type={type} id={id} name={id} placeholder={placeholder} value={value} onChange={(event) =>onChange(event)}  />
      {!isTextInput && (
        <i aria-hidden="true" className="arrow"></i>
      )}
    </div>
  );
};

export default Input;