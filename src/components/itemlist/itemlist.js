import React, { Component } from 'react';
import './itemlist.css';
import SwapiService from '../../services/swapiService';

export default class ItemList extends Component {
    swapiService = new SwapiService();

    constructor(props) {
        super(props);
        this.state = {
            itemlist: []
        }
    }

    componentDidMount() {
        const { getData } = this.props;
        getData()
            .then(itemlist => {
                this.setState({
                    itemlist
                });
            })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;
            const label = this.props.renderItem(item)
            return (
                <li
                    onClick={() => this.props.onItemSelected(id)}
                    className="list-group-item item-list"
                    key={id}>
                    {label}
                </li>
            )
        })
    }

    render() {
        const {itemlist} = this.state;
        const items = this.renderItems(itemlist);
        return (
            <ul className="list-group item-list-group">
                {items}
            </ul>
        )
    }
}