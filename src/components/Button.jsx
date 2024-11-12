import { Link } from "react-router-dom";

const Button = ({ text, link }) => {
  return (
    <Link to={link}>
      <button className="bg-blue-500 px-6 py-2 rounded-lg">{text}</button>
    </Link>
  );
};

export default Button;
