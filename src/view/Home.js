import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Grid, Item, Divider } from "semantic-ui-react";
import Movie from "../components/Movie";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@material-ui/core";

function Home() {
  const [popular, setPopular] = useState([]);
  const [latest, setLatest] = useState([]);
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    centerMode: true,
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=51ea794d32575637252fbd296d17a5e8&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        setPopular(data.results);
      });
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=51ea794d32575637252fbd296d17a5e8&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        setLatest(data.results);
        console.log(data.results);
      });
  }, []);

  return (
    <Container
      maxWidth='xl'
      style={{
        marginTop: "100px",
      }}>
      <h1 style={{ textAlign: "center", color: "white" }}>Popular Movies</h1>
      <Divider></Divider>
      <Slider {...settings}>
        {popular.map((movie) => {
          return <Movie movie={movie} />;
        })}
      </Slider>
      <Divider></Divider>
      <h1 style={{ textAlign: "center", color: "white" }}>Upcoming Movies</h1>
      <Divider></Divider>
      <Slider {...settings}>
        {latest.map((movie) => {
          return <Movie movie={movie} />;
        })}
      </Slider>
    </Container>
  );
}

export default Home;
