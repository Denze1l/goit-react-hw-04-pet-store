import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pet from '../../PetPage/PetPage';
import Creatures from '../../pets.json';

const GetId = props => props.match.params.SomeCreature;

class EachPet extends Component {
  state = {
    PetObj: null,
    petId: null,
  };

  componentDidMount() {
    const id = GetId(this.props);
    this.setState(
      {
        petId: id,
      },
      () => {
        const { petId } = this.state;
        this.setState({
          PetObj: Creatures.filter(data => data.id === petId),
        });
      },
    );
  }

  handleClick = () => {
    const { history } = this.props;
    history.push('/PetsPage');
  };

  render() {
    const { PetObj } = this.state;
    return (
      <>
        {PetObj ? (
          <Pet Characteristics={PetObj[0]} onClick={this.handleClick} />
        ) : (
          <p>Page not found</p>
        )}
      </>
    );
  }
}

EachPet.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
};
export default EachPet;
