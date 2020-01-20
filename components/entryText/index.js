import React from 'react';
import uuidv1 from 'uuid/v1';

import {
    SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity
} from 'react-native';
import Input from '../common/input';

import {debounce} from 'underscore';

import styles from './style';
import TradeContext from '../../constants/context';
import SupportResistance from '../supportResistance';

export default class EntryText extends React.Component {

    static contextType = TradeContext;
    constructor( props, context ) {

        super(props, context);

        this.state = {
            value: ''
        };
    }

    onStockSelect = (value) => {
        const { parentProps: { parentMethods } } = this.context;
        this.setState({ value });
        parentMethods.getShareNames([], true);
        parentMethods.getShareDetails();
    }

    showItem = (item, title) => {
        return (
          <TouchableOpacity style={styles.item} onPress={() => this.onStockSelect(title)}>
            <Text>{item['2. name']}</Text>
          </TouchableOpacity>
        );
    }
      

    onChange = (value) => {
        const { parentProps: { parentMethods } } = this.context;
        parentMethods.getShareDetails('', true);

        this.setState({
            value
        }, () => {
            this.state.value.length >= 3 ?
            parentMethods.getShareNames(this.state.value, false) :
            parentMethods.getShareNames('', true) 
        });
        // debounce( ()=> {
        //     console.log(value);
        // }, 300, true );
    }

    render() {
        const { value } = this.state;
        const {stockInfo} = this.context.parentProps;

        return (
            <View style={ styles.container } keyboardShouldPersistTaps='handled'>
                <Input 
                    style={ styles.inputText }
                    value={value}
                    onChangeText={this.onChange}
                    autoCorrect= {false}
                    placeholder={'Enter atleast 3 chars ... '}
                />
                <SafeAreaView keyboardShouldPersistTaps='handled'>
                    <FlatList
                        keyboardShouldPersistTaps='handled'
                        data={stockInfo}
                        renderItem={({ item }) => this.showItem(item,  item['2. name']) }
                        keyExtractor={() => uuidv1()}
                    />
                </SafeAreaView>
                <SupportResistance />
            </View>
        )
    }
}