import React from 'react';
import {
    View,
    Text
} from 'react-native';
import {TradeProvider} from '../constants/context';
import EntryText from '../components/entryText';

export default class Dashboard extends React.Component {
    constructor( props ) {
        super(props);
        this.state = {
            stockInfo: []
        }
    }
    getShareNames = (name, isEmptyValue) => {
        if( !isEmptyValue ) {
            fetch('http://localhost:3000/bestMatches')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    stockInfo: json
                });
            })
            .catch(e => console.log(e))
        }
        else {
            this.setState({
                stockInfo: []
            });
        }
        
    }

    getShareDetails = () => {
        alert('')
        fetch('http://localhost:3000/data')
        .then(response => response.json())
        .then(json => {
            this.setState({
                stockDetails: json[0]['Time Series (Daily)'][Object.keys(json[0]['Time Series (Daily)'])[0]]
            });
        })
        .catch(e => console.log(e))
    }

    render() {
        const parentMethods = {
            getShareNames: this.getShareNames,
            getShareDetails: this.getShareDetails
        };

        return (
            <TradeProvider value={ { parentProps: { ...this.state, parentMethods: {...parentMethods} } } }>
                <View>
                    <EntryText />
                </View>
            </TradeProvider>
        )
    }
}