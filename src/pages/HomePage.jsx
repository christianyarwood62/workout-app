import Navbar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div>
        <h1>Login to get access to kick start your fitness journey</h1>
        <button onClick={() => navigate("/login")} className="button">
          Log in
        </button>
      </div>
    </>
  );
}

export default Homepage;
