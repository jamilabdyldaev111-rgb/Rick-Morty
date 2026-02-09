import { useState, useEffect } from "react";
import styled from "styled-components";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    setFormValid(email.includes("@") && password.length >= 6);
  }, [email, password]);

  const submitHandler = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <Page>
      <Form onSubmit={submitHandler}>
        <h2>Login</h2>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={!formValid}>Login</button>
      </Form>
    </Page>
  );
}

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  background: ${({ theme }) => theme.cardBg};
  padding: 30px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  input {
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #ccc;
  }

  button {
    padding: 10px;
    border-radius: 8px;
    border: none;
    background: #466fec;
    color: white;
    cursor: pointer;

    &:disabled {
      background: #aaa;
    }
  }
`;
