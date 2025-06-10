import type { ButtonProps } from '../../../domain/button';
import './Button.css'

const Button = ({ isDisabled, text }: ButtonProps) => {
  return (
    <button disabled={isDisabled} className="button">{text}</button>
  );
};

export default Button;