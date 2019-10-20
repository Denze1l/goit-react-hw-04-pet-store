import React from 'react';
import PropTypes from 'prop-types';
import Style from './Pet.module.css';

const PetPage = ({
  onClick,
  Characteristics: { name, age, breed, image, description, color, gender },
}) => (
  <div className={Style.Pet}>
    <button className={Style.button} onClick={onClick} type="button">
      Return
    </button>

    <h2 className={Style.Title}>All about {name}</h2>
    <div className={Style.Information}>
      <div>
        <img src={image} alt="img" style={{ width: '300px' }} />
      </div>
      <div className={Style.Petfeatures}>
        <p3 className={Style.features}>Age: {age}</p3>
        <p3 className={Style.features}>Gender: {gender}</p3>
        <p3 className={Style.features}>Color: {color}</p3>
        <p3 className={Style.features}>Breed: {breed}</p3>
      </div>
    </div>
    <p className={Style.Petdescription}>{description}</p>
  </div>
);

PetPage.propTypes = {
  Characteristics: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    breed: PropTypes.number.isRequired,
    image: PropTypes.number.isRequired,
    description: PropTypes.number.isRequired,
    color: PropTypes.number.isRequired,
    gender: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PetPage;
