import Movie from "../components/Movie";
import { Container, Grid } from "semantic-ui-react";
import { useEffect } from "react";

function Movies() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie?api_key=51ea794d32575637252fbd296d17a5e8&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((movie) => {
        setMovie(movie);
        console.log(movie);
      });
  });
  return (
    <Container>
      <Grid columns={6}></Grid>
    </Container>
  );
}
