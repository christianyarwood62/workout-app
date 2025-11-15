import { Link } from "react-router-dom";

function Button({ children, to, onClick }) {
  if (to)
    return (
      <Link to={`/${to}`} className="button">
        {children}
      </Link>
    );

  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}

export default Button;
