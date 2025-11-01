import { useAuthentication } from "../contexts/AuthenticationContext";

function User() {
  const { user } = useAuthentication();
  return <div>{user}</div>;
}

export default User;
