import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Grid, Image, Divider, Rating, List } from "semantic-ui-react";
import { Container } from "@material-ui/core";
import ReactLoading from "react-loading";
import Cast from "../components/Cast";
import Collapsible from "react-collapsible";
import "./MovieDetails.css";

function SeriesDetails() {
  const { id } = useParams();
  const [series, setSeries] = useState(null);
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cast, setCast] = useState(null);
  const baseImgUrl = "https://image.tmdb.org/t/p/";
  const baseVidUrl = "https://www.youtube.com/embed/";
  const size = "w500";

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(
        "https://api.themoviedb.org/3/tv/" +
          id +
          "?api_key=51ea794d32575637252fbd296d17a5e8&language=en-US"
      )
        .then((res) => res.json())
        .then((series) => {
          setSeries(series);
          setLoading(false);
          console.log(series);
        });
      setLoading(true);
      fetch(
        "https://api.themoviedb.org/3/tv/" +
          id +
          "/videos?api_key=51ea794d32575637252fbd296d17a5e8&language=en-US"
      )
        .then((res) => res.json())
        .then((video) => {
          setVideo(video.results[0]);
          setLoading(false);
          console.log(video.results[0]);
        });
      setLoading(true);
      fetch(
        "https://api.themoviedb.org/3/tv/" +
          id +
          "/credits?api_key=51ea794d32575637252fbd296d17a5e8&language=en-US"
      )
        .then((res) => res.json())
        .then((data) => {
          setCast(data.cast);
          console.log(data.cast);
        });
    }
  }, []);

  return (
    <Container maxWidth='xl' style={{ marginTop: "100px" }}>
      {loading || !series ? (
        <ReactLoading type='balls' color='white' height={100} width={100} />
      ) : (
        <Grid columns='equal'>
          <Grid.Column>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image src={`${baseImgUrl}/${size}${series.poster_path}`}></Image>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div
              style={{
                height: "70px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <p
                style={{
                  fontSize: "50px",
                  color: "white",
                }}>
                {series.original_name}
              </p>
              <p
                style={{
                  color: "grey",
                  fontSize: "30px",
                  marginLeft: "20px",
                  marginTop: "-40px",
                }}>
                First Air Date: {series.first_air_date}
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              {series.genres.map((genre) => {
                return (
                  <p style={{ color: "grey", marginLeft: "5px" }}>
                    {genre.name}
                  </p>
                );
              })}
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Rating
                icon='star'
                size='huge'
                defaultRating={series.vote_average}
                maxRating={10}
                style={{
                  border: "solid 1px white",
                  borderRadius: "15px",
                  marginBottom: "20px",
                }}
              />
              <p
                style={{
                  color: "white",
                  marginLeft: "20px",
                  marginTop: "-3px",
                  fontSize: "20px",
                }}>
                {series.vote_count} Votes
              </p>
            </div>
            <p
              style={{
                color: "white",
                fontSize: "30px",
                textDecoration: "underline",
              }}>
              {series.tagline}
            </p>
            <p
              style={{
                color: "white",
                fontSize: "20px",
                border: "solid white 0.5px",
                borderRadius: "10px",
                padding: "10px",
              }}>
              {series.overview}
            </p>
            <div>
              {loading || !video ? (
                <ReactLoading
                  type='balls'
                  color='white'
                  height={100}
                  width={100}
                />
              ) : (
                <iframe
                  width='660'
                  height='315'
                  src={`${baseVidUrl}/${video.key}`}
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen></iframe>
              )}
            </div>
            <Collapsible trigger='Cast'>
              <div style={{ marginTop: "30px" }}>
                {loading || !cast ? (
                  <ReactLoading
                    type='balls'
                    color='white'
                    height={100}
                    width={100}
                  />
                ) : (
                  <div>
                    {cast.map((cast) => {
                      return <Cast cast={cast} />;
                    })}
                  </div>
                )}
              </div>
            </Collapsible>
          </Grid.Column>
        </Grid>
      )}
      <Divider vertical></Divider>
    </Container>
  );
}

export default SeriesDetails;
