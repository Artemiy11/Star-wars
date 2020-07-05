import React, { Component } from 'react';
import './randomPlanet.css';
import SwapiService from '../../services/swapiService';
import Spinner from '../spinner';
import ErrorIndicator from '../errorIndicator';
import PlanetView from './planetView';

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();

    constructor(props) {
        super(props);

        this.state = {
            planet: {},
            loading: true,
            error: false
        }

        this.onPlanetUpdated = this.onPlanetUpdated.bind(this);
        this.onError = this.onError.bind(this);

        this.interval = setInterval(() => this.updatePlanet(), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    componentDidMount() {
        this.updatePlanet();
    }

    onPlanetUpdated(planet) {
        this.setState({ planet, loading: false });
    }

    onError(err) {
        this.setState({ error: true, loading: false })
    }

    updatePlanet() {
        const id = Math.floor(Math.random() * 19) + 1;
        this.swapiService.getPlanet(id)
            .then(this.onPlanetUpdated)
            .catch(this.onError)
    }

    render() {
        const { loading, error } = this.state;

        const content = !(loading || error) ? <PlanetView planet={this.state.planet} /> : null;
        const loadingContent = loading ? <Spinner /> : null;
        const errorContent = error ? <ErrorIndicator /> : null;

        return (
                <div className="card">
                    {loadingContent}
                    <div className="card-body planet-body">
                        {content}
                        {errorContent}
                    </div>
                </div>
        )
    }
}