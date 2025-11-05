import { useAuthentication } from "../contexts/AuthenticationContext";

function LoginDropDown() {
  const { user } = useAuthentication();

  return (
    <div className="login-dropdown-container">
      <div>
        {user ? <p>Logged in as {user}</p> : <p>Dont have an account?</p>}
      </div>
      <div>{!user && <p>Sign up</p>}</div>
    </div>
  );
}

export default LoginDropDown;
