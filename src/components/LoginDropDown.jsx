import { useAuthentication } from "../contexts/AuthenticationContext";

function LoginDropDown({ isDropDownOpen }) {
  const { user } = useAuthentication();

  return (
    <div className={`login-dropdown-container ${isDropDownOpen ? "open" : ""}`}>
      {user !== null ? (
        <p className="login-dropdown_user">Logged in as {user}</p>
      ) : (
        <div>
          <p className="login-dropdown_user">Dont have an account?</p>
          <p>Sign up</p>
        </div>
      )}
    </div>
  );
}

export default LoginDropDown;
