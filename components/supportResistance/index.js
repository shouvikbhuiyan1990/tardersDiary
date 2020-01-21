import React from 'react';
import { 
    View,
    Text
 } from 'react-native';

import Table from '../common/table';
import TradeContext from '../../constants/context';

import {
    calculateSupport,
    calculateResistance,
    calculateDemarkTheory
} from '../../utils/calc';
import styles from './styles';

import {
    isEmpty
} from 'underscore';

export default () => {
    const context = React.useContext(TradeContext);

    const { parentProps : {stockDetails = {}} } = context;

    const support = !isEmpty(stockDetails) ? calculateSupport(parseFloat(stockDetails['2. high']), parseFloat(stockDetails['3. low']), parseFloat((stockDetails['4. close']))) : [];
    const resistance = !isEmpty(stockDetails) ? calculateResistance(parseFloat(stockDetails['2. high']), parseFloat(stockDetails['3. low']), parseFloat((stockDetails['4. close']))) : [];

    const demarkTheory = !isEmpty(stockDetails) ? calculateDemarkTheory(parseFloat(stockDetails['1. open']), parseFloat(stockDetails['2. high']), parseFloat(stockDetails['3. low']), parseFloat((stockDetails['4. close']))) : [];

    return (
        <View>
            {!isEmpty(stockDetails)  &&
                <React.Fragment> 
                    <View>
                        <Text>{`Predicted High for this stock is`}</Text><Text style={styles.greenBold}>{`${demarkTheory.predictedHigh}`}</Text>
                        <Text>{`Predicted Low for this stock is`}</Text><Text style={styles.redBold}>{`${demarkTheory.predictedLow}`}</Text>
                    </View>
                    <Text>The Stock is expected to react to the following levels</Text>
                    <Table tabledata={support} countText='Support'/>
                    <Table tabledata={resistance} countText='Resistance'/>
                </React.Fragment>
            }
        </View>
    )
}