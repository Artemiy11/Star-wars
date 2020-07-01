import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../randomPlanet';
import ItemList from '../itemlist';
import PeopleDetails from '../peopleDetails';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      selectedPerson: null
    }

    this.onPersonSelected = this.onPersonSelected.bind(this);
  }

  onPersonSelected(id) {
    this.setState({
      selectedPerson: id
    })
  }

  render() {
    return (
      <>
        <div className="container">
          <Header/>
          <RandomPlanet/>
          <div className="row mt-4">
            <div className="col-md-6">
              <ItemList onPersonSelected={this.onPersonSelected}/>
            </div>
            <div className="col-md-6">
              <PeopleDetails personId={this.state.selectedPerson}/>
            </div>
          </div>
        </div>
      </>
    )
  }
}
