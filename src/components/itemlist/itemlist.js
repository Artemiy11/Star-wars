import React from 'react';
import './itemlist.css';
import SwapiService from '../../services/swapiService';

const ItemList = () => {
    const swapiService = new SwapiService();
    const people = swapiService.getAllPeople()
        .then(people => console.log(people))
    const items = people.forEach(item => item.map(item => {
        return (
            <li>
                {item.name}
            </li>
        )
    }))
    return (
        <ul>
            {items}
        </ul>
    )
}

export default ItemList;