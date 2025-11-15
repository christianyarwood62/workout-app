import { useAuthentication } from "../contexts/AuthenticationContext";
import { User, LogIn, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginDropDown from "./LoginDropDown";
import Button from "../UI/Button";

function UserTile() {
  const { user, isDropdownOpen, setIsDropDownOpen } = useAuthentication();

  const navigate = useNavigate();

  return (
    <>
      <div className="profile-tile">
        <div className="login-icon-container">
          <User color="#e9e2e2" />

          {user ? <span>{user}</span> : <Button to="/login">Sign in</Button>}
          <button onClick={() => setIsDropDownOpen(!isDropdownOpen)}>
            <ChevronDown />
          </button>
        </div>
        {isDropdownOpen && <LoginDropDown />}
      </div>
    </>
  );
}

export default UserTile;
