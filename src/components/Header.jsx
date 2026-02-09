import styled from "styled-components";

export default function Header({ isLoggedIn, onNavigate, onLogout }) {
  return (
    <Container>
      {isLoggedIn && (
        <Actions>
          <button onClick={() => onNavigate("users")}>Users</button>
          <button onClick={() => onNavigate("admin")}>Admin</button>
          <button onClick={() => onNavigate("rick")}>Rick & Morty</button>
          <Logout onClick={onLogout}>Logout</Logout>
        </Actions>
      )}
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 12px 40px;
  background: ${({ theme }) => theme.headerBg};
  color: white;
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;

  button {
    padding: 6px 12px;
    border-radius: 8px;
    border: 1px solid white;
    background: transparent;
    color: white;
    cursor: pointer;

    &:hover {
      background: white;
      color: black;
    }
  }
`;

const Logout = styled.button`
  background: red !important;
  border: none !important;
`;
