import { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import Header from "./components/Header";
import Login from "./components/Login/Login";

import Users from "./components/users/Users";
import { Admin } from "./components/Admin/Admin";
import RickAndMorty from "./components/rick-morty/RickAndMorty";


const darkTheme = {
  pageBg: `linear-gradient(to right bottom,#1c1c1c,#3a3a3a,#5a5a5a,#7f1f7f)`,
  headerBg: `linear-gradient(to right bottom,#1c1c1c,#3a3a3a,#5a5a5a,#7f1f7f)`,
  cardBg: "#3c3e44",
  text: "#ffffff",
  buttonBg: "#ffffff",
  buttonText: "#1f1f1f",
};


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background: ${({ theme }) => theme.pageBg};
    color: ${({ theme }) => theme.text};
    font-family: sans-serif;
    transition: background 0.3s ease, color 0.3s ease;
  }
`;

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPage] = useState("users");

  const loginHandler = () => setIsLoggedIn(true);

  const logoutHandler = () => {
    setIsLoggedIn(false);
    setPage("users");
  };

  const pages = {
    users: <Users />,
    admin: <Admin />,
    rick: <RickAndMorty />,
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />

      <Header
        isLoggedIn={isLoggedIn}
        onNavigate={setPage}
        onLogout={logoutHandler}
      />

      {!isLoggedIn ? (
        <Login onLogin={loginHandler} />
      ) : (
        pages[page] || <h2>Page not found</h2>
      )}
    </ThemeProvider>
  );
}
