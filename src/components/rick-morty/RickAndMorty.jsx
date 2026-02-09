import { useEffect, useState } from "react";
import styled from "styled-components";

export default function RickAndMorty() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results || []))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Page>
      <h2>Rick & Morty Characters</h2>
      <Grid>
        {characters.map((char) => (
          <Card key={char.id}>
            <Image src={char.image} alt={char.name} />
            <Name>{char.name}</Name>
          </Card>
        ))}
      </Grid>
    </Page>
  );
}

const Page = styled.div`
  padding: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: #3c3e44;
  color: white;
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Name = styled.h4`
  margin: 8px 0;
`;
