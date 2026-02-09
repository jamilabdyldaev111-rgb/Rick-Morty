import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setUsers)
      .catch((err) => console.error(err));
  }, []);

  return (
    <Page>
      <h2>Users</h2>
      <Grid>
        {users.map((u) => (
          <Card key={u.id}>
            <h3>{u.name}</h3>
            <p>Email: {u.email}</p>
            <p>Phone: {u.phone}</p>
          </Card>
        ))}
      </Grid>
    </Page>
  );
}

const Page = styled.div`
  padding: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.cardBg};
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;
