import { Link } from "react-router-dom";

function Button({ children, to, onClick, className }) {
  if (to)
    return (
      <Link style={{ color: "white" }} to={`/${to}`} className={className}>
        {children}
      </Link>
    );

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;
