import React, { Component } from 'react';
import './randomPlanet.css';
import SwapiService from '../../services/swapiService';

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();

    constructor(props) {
        super(props);

        this.state = {
            planet: {}
        }

        this.onPlanetUpdated = this.onPlanetUpdated.bind(this);
        this.updatePlanet();
    }

    onPlanetUpdated(planet) {
        this.setState({ planet });
    }

    updatePlanet() {
        const id = Math.floor(Math.random() * 25) + 2;
        this.swapiService.getPlanet(id)
            .then(this.onPlanetUpdated);
    }

    render() {
        const { planet: { name, population, diameter, gravity, id } } = this.state;

        return (
            <div className="card">
                <div className="card-body">
                    <img src={ `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
                    <div className="ulWrapper">
                    <h3>{name}</h3>
                    <ul>
                        <li>Population</li>
                        <li>{population}</li>
                    </ul>
                    <hr/>
                    <ul>
                        <li>Diameter</li>
                        <li>{diameter}</li>
                    </ul>
                    <hr/>
                    <ul>
                        <li>Gravity</li>
                        <li>{gravity}</li>
                    </ul>
                    <hr/>
                    </div>
                </div>
            </div>
        )
    }
}