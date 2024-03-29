import React from 'react';
import { PersonDetails, PersonList } from '../sw-components';
import Row from '../row';
import {withRouter} from "react-router-dom";

const PeoplePage = ({ history, match }) => {
  console.log(match.params.id);
  return (
      <Row
        left={<PersonList onItemSelected={(itemId) => history.push(itemId)} />}
        right={<PersonDetails itemId={match.params.id} />} />
    );
}


export default withRouter(PeoplePage);
