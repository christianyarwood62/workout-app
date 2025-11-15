import { useNavigate } from "react-router-dom";

function Button({ children, to }) {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(`/${to}`)} className="button">
      {children}
    </button>
  );
}

export default Button;
