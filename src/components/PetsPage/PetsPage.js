import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Style from './PetsList.module.css';

const PetsPage = ({ Pets = [] }) => (
  <ul className={Style.PetsList}>
    {Pets.map(data => (
      <li className={Style.EachPet} key={data.id}>
        <Link
          className={Style.Name}
          to={{
            pathname: `PetsPage/${data.id}`,
          }}
        >
          <img
            alt="img"
            style={{
              borderRadius: '10px',
              width: '80%',
              height: '250px',
              paddingTop: '10px',
            }}
            src={data.image}
          />
          <h2>{data.name}</h2>
        </Link>
      </li>
    ))}
  </ul>
);

PetsPage.propTypes = {
  Pets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      breed: PropTypes.number.isRequired,
      image: PropTypes.number.isRequired,
      description: PropTypes.number.isRequired,
      color: PropTypes.number.isRequired,
      gender: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default PetsPage;
