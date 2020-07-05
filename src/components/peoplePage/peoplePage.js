import React, { Component } from 'react';
import ItemList from '../itemlist';
import ItemDetails from '../itemDetails';
import SwapiService from '../../services/swapiService';
import Row from '../row';
import ErrorBoundry from '../errorBoundry';

export default class PeoplePage extends Component {
    swapiService = new SwapiService();

    constructor(props) {
        super(props)
        this.state = {
            selectedPerson: null
        }
    }

    onItemSelected = (selectedPerson) => {
        this.setState({ selectedPerson })
    }

    render() {
        const { selectedPerson } = this.state;

        const itemList = <ItemList
            renderItem={({ name, gender }) => `${name} (${gender})`}
            getData={this.swapiService.getAllPeople}
            onItemSelected={this.onItemSelected} />;

        const itemDetails = <ItemDetails
            itemId={selectedPerson}
            getData={this.swapiService.getPerson}/>;

        return (
            <ErrorBoundry>
                <Row left={itemList} right={itemDetails}/>
            </ErrorBoundry>
        )
    }
}