import type { ButtonProps } from '../../../domain/button';
import './Button.css'

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="button">{text}</button>
  );
};

export default Button;