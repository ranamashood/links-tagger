import { ChangeEvent } from "react";

interface Props {
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, handleChange }: Props) => {
  return <input type="text" value={value} onChange={handleChange} />;
};

export default Input;
