import { createContext, useContext, useReducer } from "react";

const AuthenticationContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

const fakeUser = {
  name: "Jack Black",
  email: "jackblack@gmail.com",
  password: "123",
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };

    case "logout":
      return { ...state, user: null, isAuthenticated: false };

    default:
      return;
  }
}
function AuthenticationProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    if (email === fakeUser.email && password === fakeUser.password)
      dispatch({ type: "login", payload: fakeUser.name });
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthenticationContext.Provider
      value={{ user, isAuthenticated, login, logout }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

function useAuthentication() {
  const context = useContext(AuthenticationContext);
  if (context === undefined) {
    throw new Error(
      "AuthenticationContext was used outside of AuthenticationProvider"
    );
  }

  return context;
}

export { AuthenticationProvider, useAuthentication };
