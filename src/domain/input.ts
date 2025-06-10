export interface InputProps {
  hasLabel?: boolean;
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  text: string;
  type?: string;
  value?: string;
};