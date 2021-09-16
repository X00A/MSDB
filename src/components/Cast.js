import { Image, List, Tab, Table, Dropdown } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

function Cast({ cast }) {
  const history = useHistory();
  const baseImgUrl = "https://image.tmdb.org/t/p/original";
  const size = "w300";

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>
            <Image avatar src={`${baseImgUrl}/${cast.profile_path}`} />
            {cast.name}
          </Table.HeaderCell>
          <Table.HeaderCell>{cast.character}</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    </Table>
  );
}

export default Cast;
