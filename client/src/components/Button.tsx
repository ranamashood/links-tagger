interface Props {
  title: string;
  type?: "submit";
  onClick?: () => void;
}

const Button = ({ title, type, onClick }: Props) => {
  return (
    <button type={type} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
