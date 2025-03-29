import "./button-style.css";

type Props = {
  title: string;
};

const Button = ({ title }: Props) => {
  return <button className="btn">{title}</button>;
};

export default Button;
