import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../randomPlanet';
import PeoplePage from '../peoplePage/peoplePage';
import BtnToggle from '../btnToggle';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SwapiService from '../../services/swapiService';
import Row from '../row';
import ItemDetails, { Field } from '../itemDetails';

export default class App extends Component {
  swapiService = new SwapiService();

  constructor() {
    super()
    this.state = {
      hiddenPlanet: false,
      selectedPlanet: 1
    }

    this.onTogglePlanet = this.onTogglePlanet.bind(this)
  }

  onTogglePlanet() {
    this.setState({ hiddenPlanet: !this.state.hiddenPlanet })
  }

  render() {
    const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;

    const personDetails = <ItemDetails
      itemId={22}
      getData={getPerson}
      getImageUrl={getPersonImage}>
      <Field field="gender" label="Gender"/>
      <Field field="eye_color" label="Eye color"/>
      <Field field="birth_year" label="Birth year"/>
    </ItemDetails>

    const starshipDetails = <ItemDetails
      itemId={5}
      getData={getStarship}
      getImageUrl={getStarshipImage}>
      <Field field="model" label="Model"/>
      <Field field="length" label="Length"/>
      <Field field="costInCredits" label="Cost"/>
    </ItemDetails>

    const randomPlanet = this.state.hiddenPlanet ? null : <RandomPlanet />
    return (
      <Router>
        <div className="container">
          <Header />
          {randomPlanet}
          <Route component={PeoplePage} path="/characters"/>
        </div>
      </Router>
    )
  }
}
