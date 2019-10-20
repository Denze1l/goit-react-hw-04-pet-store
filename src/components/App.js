import React from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import AboutPage from './AboutPage/AboutPage';
import PetsPage from './Pages/PetsList/PetsList';
import PetPage from './Pages/EachPet/EachPet';
import Style from './Style.module.css';

const ActivSt = {
  color: 'tomato',
};

const App = () => {
  return (
    <>
      <header className={Style.header}>
        <ul className={Style.NavList}>
          <li className={Style.Navigation}>
            <NavLink
              exact
              activeStyle={ActivSt}
              className={Style.Eachword}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className={Style.Navigation}>
            <NavLink
              activeStyle={ActivSt}
              className={Style.Eachword}
              to="/AboutPage"
            >
              About
            </NavLink>
          </li>
          <li className={Style.Navigation}>
            <NavLink
              activeStyle={ActivSt}
              className={Style.Eachword}
              to="/PetsPage"
            >
              Pets
            </NavLink>
          </li>
        </ul>
      </header>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/AboutPage" component={AboutPage} />
        <Route path="/PetsPage/:SomeCreature" component={PetPage} />
        <Route path="/PetsPage" component={PetsPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
