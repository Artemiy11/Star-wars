import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../randomPlanet';
import PeoplePage from '../peoplePage/peoplePage';
import BtnToggle from '../btnToggle';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SwapiService from '../../services/swapiService';

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
    const randomPlanet = this.state.hiddenPlanet ? null : <RandomPlanet />
    console.log(this.swapiService.getAllStarships())
    return (
      <Router>
        <div className="container">
          <Header />
          {randomPlanet}
          <BtnToggle onTogglePlanet={this.onTogglePlanet} />
          <Route path="/characters" component={PeoplePage} exact />
        </div>
      </Router>
    )
  }
}
