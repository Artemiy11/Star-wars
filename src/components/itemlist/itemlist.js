import React, { Component } from 'react';
import './itemlist.css';
import SwapiService from '../../services/swapiService';

export default class ItemList extends Component {
    swapiService = new SwapiService();

    constructor(props) {
        super(props);
        this.state = {
            peopleList: []
        }
    }

    componentDidMount() {
        this.swapiService.getAllPeople()
            .then(peopleList => {
                this.setState({
                    peopleList
                });
            })
    }

    renderItems(arr) {
        return arr.map(({id, name}) => {
            return (
                <li
                    onClick={() => this.props.onPersonSelected(id)}
                    className="list-group-item item-list"
                    key={id}>
                    {name}
                </li>
            )
        })
    }

    render() {
        const {peopleList} = this.state;
        const items = this.renderItems(peopleList);
        return (
            <ul className="list-group item-list-group">
                {items}
            </ul>
        )
    }
}