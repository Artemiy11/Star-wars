import React, { Component } from 'react';
import './peopleDetails.css';
import SwapiService from '../../services/swapiService';

export default class PeopleDetails extends Component {
    swapiService = new SwapiService();
    constructor(props) {
        super(props);
        this.state = {
            personId: 3
        }
    }


    render() {
        const person = this.swapiService.getPerson(this.props.selectedPerson);
        return (
            <div className="card">
                <div className="card-body person-card">
                    <img src="https://vignette.wikia.nocookie.net/ru.starwars/images/e/eb/ArtooTFA2-Fathead.png/revision/latest?cb=20151106094927" alt="person"/>
                    <div className="person-ul-wrapper">
                            <h3 className="person-name">R2D2</h3>
                            <ul className="person-props">
                                <li>birth_Year</li>
                                <li>-----</li>
                            </ul>
                            <hr/>
                            <ul className="person-props">
                                <li>Mass</li>
                                <li>-----</li>
                            </ul>
                            <hr/>
                            <ul className="person-props">
                                <li>Homeworld</li>
                                <li>Naboo</li>
                            </ul>
                            <hr/>
                        </div>
                </div>
            </div>
        )
    }
}