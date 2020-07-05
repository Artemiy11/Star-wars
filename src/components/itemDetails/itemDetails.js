import React, { Component } from 'react';
import './itemDetails.css';
import SwapiService from '../../services/swapiService';

export default class ItemDetails extends Component {
    swapiService = new SwapiService();
    constructor(props) {
        super(props);
        this.state = {
            item: null,
            loading: true,
            error: false
        }

        this.onError = this.onError.bind(this);
    }

    componentDidMount() {
        this.onItemUpdate()
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.onItemUpdate()
        }
    }

    onItemUpdate() {
        const { itemId, getData } = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then(item => {
                this.setState({ loading: false, item })
            })
            .catch(this.onError)
    }

    onError(err) {
        this.setState({ error: true, loading: false })
    }

    render() {
        const { item } = this.state;

        if (!item) {
            return <span>Select a character</span>
        }

        const { birth_year, mass, eye_color, name, gender, height, id } = item;

        return (
            <div className="card">
                <div className="card-body person-card">
                    <img className="person-img" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="person" />
                    <div className="person-ul-wrapper">
                        <h3 className="person-name">{name}</h3>
                        <ul className="person-props">
                            <li>Birth year</li>
                            <li>{birth_year}</li>
                        </ul>
                        <hr />
                        <ul className="person-props">
                            <li>Mass</li>
                            <li>{mass}</li>
                        </ul>
                        <hr />
                        <ul className="person-props">
                            <li>Eye color</li>
                            <li>{eye_color}</li>
                        </ul>
                        <hr />
                        <ul className="person-props">
                            <li>Gender</li>
                            <li>{gender}</li>
                        </ul>
                        <hr />
                        <ul className="person-props">
                            <li>Height</li>
                            <li>{height}</li>
                        </ul>
                        <hr />
                    </div>
                </div>
            </div>
        )
    }
}