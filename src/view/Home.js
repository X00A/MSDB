import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Grid, Item } from "semantic-ui-react";
import Movie from "../components/Movie";

function Home() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=51ea794d32575637252fbd296d17a5e8&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        console.log(data);
      });
  }, []);

  return (
    <Container>
      {/* <Grid columns={6}>
        {movies.map((movie, index) => {
          return (
            <Grid.Column key={index}>
              <Movie movie={movie}></Movie>
            </Grid.Column>
          );
        })}
      </Grid> */}
    </Container>
  );
}

export default Home;
