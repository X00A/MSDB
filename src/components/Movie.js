import { Card, Image, Icon, Rating, Divider } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import ReadMoreReact from "read-more-react";

function Movie({ movie }) {
  const history = useHistory();
  const baseImgUrl = "https://image.tmdb.org/t/p/";
  const size = "w500";

  const handleRedirect = () => {
    history.push("/movie-detail/" + movie.id);
  };

  return (
    <Card style={{ zIndex: 0, height: "550px" }} onClick={handleRedirect}>
      <div style={{ maxHeight: "250px" }}>
        <Image
          src={`${baseImgUrl}/${size}${movie.poster_path}`}
          centered
          size='medium'
          style={{
            objectFit: "contain",
            height: "250px",
            width: "250px",
          }}
        />
      </div>
      <Card.Content>
        <Card.Header>{movie.original_title}</Card.Header>
        <Card.Meta>
          <span className='date'>{movie.release_date}</span>
        </Card.Meta>
        <Card.Description>
          <ReadMoreReact
            text={movie.overview}
            min={100}
            ideal={300}
            max={300}
            readMoreText=''
          />
          <a onClick={handleRedirect}> Click here to read more!</a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Rating
            icon='star'
            defaultRating={movie.vote_average}
            maxRating={10}
          />
          <Divider>
            <h4>{movie.vote_count}</h4>
          </Divider>
        </a>
      </Card.Content>
    </Card>
  );
}

export default Movie;
