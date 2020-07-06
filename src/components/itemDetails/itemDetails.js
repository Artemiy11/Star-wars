import React, { Component } from 'react';
import './itemDetails.css';
import SwapiService from '../../services/swapiService';

const Field = ({item, label, field}) => {
    return (
        <li className="list-group-item item-props">
            <span>{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export { Field };

export default class ItemDetails extends Component {
    swapiService = new SwapiService();
    constructor(props) {
        super(props);
        this.state = {
            item: null,
            loading: true,
            error: false,
            image: null
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
        const { itemId, getData, getImageUrl } = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then(item => {
                this.setState({
                    loading: false,
                    item,
                    image: getImageUrl(item)
                })
            })
            .catch(this.onError)
    }

    onError(err) {
        this.setState({ error: true, loading: false })
    }

    render() {
        const { item, image } = this.state;

        if (!item) {
            return <span>Select a character</span>
        }

        const {name} = item;

        return (
            <div className="card">
                <div className="card-body person-card">
                    <img className="person-img" src={image} alt="person" />
                    <div className="person-ul-wrapper">
                        <h3 className="person-name">{name}</h3>
                        <ul className="list-group list-group-flush">
                            {
                                React.Children.map(this.props.children, (child) => {
                                    return React.cloneElement(child, { item });
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}