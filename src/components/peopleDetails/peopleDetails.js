import React, { Component } from 'react';
import './peopleDetails.css';
import SwapiService from '../../services/swapiService';

export default class PeopleDetails extends Component {
    swapiService = new SwapiService();
    constructor(props) {
        super(props);
        this.state = {
            person: null
        }
    }

    componentDidMount() {
        this.onPersonUpdate()
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.onPersonUpdate()
        }
    }

    onPersonUpdate() {
        const { personId } = this.props;
        if (!personId) {
            return;
        }

        this.swapiService.getPerson(personId)
                .then(person => {
                    this.setState({ person })
                })
    }

    render() {

        if (!this.state.person) {
            return <span>Select a character</span>
        }

        const { birth_year, mass, eye_color, name, gender, height } = this.state.person;
            
        return (
            <div className="card">
                <div className="card-body person-card">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${this.props.personId}.jpg`} alt="person"/>
                    <div className="person-ul-wrapper">
                            <h3 className="person-name">{name}</h3>
                            <ul className="person-props">
                                <li>Birth year</li>
                                <li>{birth_year}</li>
                            </ul>
                            <hr/>
                            <ul className="person-props">
                                <li>Mass</li>
                                <li>{mass}</li>
                            </ul>
                            <hr/>
                            <ul className="person-props">
                                <li>Eye color</li>
                                <li>{eye_color}</li>
                            </ul>
                            <hr/>
                            <ul className="person-props">
                                <li>Gender</li>
                                <li>{gender}</li>
                            </ul>
                            <hr/>
                            <ul className="person-props">
                                <li>Height</li>
                                <li>{height}</li>
                            </ul>
                            <hr/>
                        </div>
                </div>
            </div>
        )
    }
}