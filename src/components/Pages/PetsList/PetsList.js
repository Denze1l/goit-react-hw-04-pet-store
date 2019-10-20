import React, { Component } from 'react';
import PetsPage from '../../PetsPage/PetsPage';
import PetsJs from '../../pets.json';

class PetsList extends Component {
  state = {
    creature: [],
  };

  componentDidMount() {
    this.setState({ creature: PetsJs });
  }

  render() {
    const { creature } = this.state;
    return <PetsPage Pets={creature} />;
  }
}

export default PetsList;
