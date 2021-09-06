import { Card, Image, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

function Movie() {
  const history = useHistory();

  return (
    <Card style={{ zIndex: 0 }}>
      <div style={{ maxHeight: 0 }}>
        <Image src='' />
      </div>
      <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  );
}

export default Movie;
