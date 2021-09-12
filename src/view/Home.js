import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Grid, Item } from "semantic-ui-react";
import Movie from "../components/Movie";

function Home() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=51ea794d32575637252fbd296d17a5e8&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        setPopular(data.results);
        console.log(data.results);
      });
  }, []);

  return (
    <Container fluid style={{ marginTop: "100px", position: "relative" }}>
      <h1 style={{ color: "white" }}>Popular Movies</h1>
      <Grid columns={7}>
        {popular.map((movie, index) => {
          return (
            <Grid.Column key={index}>
              <Movie movie={movie} />
            </Grid.Column>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Home;
