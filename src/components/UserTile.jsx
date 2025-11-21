import { useAuthentication } from "../contexts/AuthenticationContext";
import { User, LogIn, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginDropDown from "./LoginDropDown";
import Button from "../UI/Button";

function UserTile() {
  const { user } = useAuthentication();

  const [isDropdownOpen, setIsDropDownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="profileTile_container">
      <div className="profileTile_user">
        <User color="#e9e2e2" />

        {user ? (
          <span>{user}</span>
        ) : (
          <Button className="userTile_signIn_button" to="/login">
            Sign in
          </Button>
        )}
        <button>
          <ChevronDown onClick={() => setIsDropDownOpen(!isDropdownOpen)} />
        </button>
      </div>
      <LoginDropDown isDropDownOpen={isDropdownOpen} />
    </div>
  );
}

export default UserTile;
