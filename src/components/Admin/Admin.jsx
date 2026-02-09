import styled from "styled-components";

export function Admin() {
  const actions = [
    { id: 1, name: "Create User" },
    { id: 2, name: "Delete User" },
    { id: 3, name: "Generate Report" },
  ];

  return (
    <Page>
      <h1>Admin Panel</h1>

      <Grid>
        {actions.map((a) => (
          <Card key={a.id}>{a.name}</Card>
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.cardBg};
  padding: 20px;
  border-radius: 12px;
  cursor: pointer;
  text-align: center;

  &:hover {
    transform: translateY(-4px);
  }
`;
