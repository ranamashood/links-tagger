interface Props {
  title: string;
  onClick: () => void;
}

const Button = ({ title, onClick }: Props) => {
  return <button onClick={onClick}>{title}</button>;
};

export default Button;
