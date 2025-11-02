import { useAuthentication } from "../contexts/AuthenticationContext";
import { User, LogIn, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginDropDown from "./LoginDropDown";

function UserTile() {
  const { user } = useAuthentication();

  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropDownOpen] = useState(false);

  return (
    <div>
      <div className="login-icon-container">
        <div>
          <User />
          {user ? (
            <span>{user}</span>
          ) : (
            <>
              <button onClick={() => navigate("/login")}>Sign in</button>
              <button onClick={() => setIsDropDownOpen(!isDropdownOpen)}>
                <ChevronDown />
              </button>
            </>
          )}
        </div>
      </div>
      {isDropdownOpen && <LoginDropDown />}
    </div>
  );
}

export default UserTile;
