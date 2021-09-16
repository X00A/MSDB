import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Grid, Item, Divider, Icon } from "semantic-ui-react";
import Movie from "../components/Movie";
import Series from "../components/Series";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@material-ui/core";

function Home() {
  const [popular, setPopular] = useState([]);
  const [latest, setLatest] = useState([]);
  const [seriesPopular, setSeriesPopular] = useState([]);
  const [seriesLatest, setSeriesLatest] = useState([]);
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
    fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=51ea794d32575637252fbd296d17a5e8&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        setSeriesPopular(data.results);
        console.log(data.results);
      });
    fetch(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=51ea794d32575637252fbd296d17a5e8&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        setSeriesLatest(data.results);
        console.log(data.results);
      });
  }, []);

  return (
    <Container
      maxWidth='xl'
      style={{
        marginTop: "50px",
      }}>
      <p
        style={{
          paddingLeft: "50px",
          color: "white",
          fontSize: "30px",
          border: "solid white 2px",
          borderRadius: "25px",
        }}>
        Movies
        <Icon
          name='video'
          style={{ marginLeft: "10px", marginBottom: "-2px" }}
        />
      </p>
      <p style={{ fontSize: "30px", textAlign: "center", color: "white" }}>
        Popular
        <Icon name='fire' style={{ marginLeft: "10px" }} />
      </p>
      <Divider></Divider>
      <Slider {...settings}>
        {popular.map((movie) => {
          return <Movie movie={movie} />;
        })}
      </Slider>
      <p
        style={{
          fontSize: "30px",
          textAlign: "center",
          color: "white",
          paddingTop: "20px",
        }}>
        Latest
        <Icon name='gem' style={{ marginLeft: "10px" }} />
      </p>
      <Divider></Divider>
      <Slider {...settings}>
        {latest.map((movie) => {
          return <Movie movie={movie} />;
        })}
      </Slider>
      <Divider></Divider>
      <p
        style={{
          marginTop: "30px",
          paddingLeft: "50px",
          color: "white",
          fontSize: "30px",
          border: "solid white 2px",
          borderRadius: "25px",
        }}>
        Series
        <Icon name='tv' style={{ marginLeft: "10px", marginBottom: "-2px" }} />
      </p>
      <p style={{ fontSize: "30px", textAlign: "center", color: "white" }}>
        Popular
        <Icon name='fire' style={{ marginLeft: "10px" }} />
      </p>
      <Divider></Divider>
      <Slider {...settings}>
        {seriesPopular.map((series) => {
          return <Series series={series} />;
        })}
      </Slider>
      <p
        style={{
          fontSize: "30px",
          textAlign: "center",
          color: "white",
          paddingTop: "20px",
        }}>
        Top Rated
        <Icon name='gem' style={{ marginLeft: "10px" }} />
      </p>
      <Divider></Divider>
      <Slider {...settings}>
        {seriesLatest.map((series) => {
          return <Series series={series} />;
        })}
      </Slider>
    </Container>
  );
}

export default Home;
