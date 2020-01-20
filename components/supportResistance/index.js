import React from 'react';
import { 
    View,
    Text
 } from 'react-native';
import TradeContext from '../../constants/context';

import {
    calculateSupport,
    calculateResistance,
    calculateDemarkTheory
} from '../../utils/calc';

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
            {
                !isEmpty(stockDetails) && support.map((value, index)=> (
                    <Text key={index} >{`Support ${index+1} ${value}`}</Text>
                ))
            }
            {
                !isEmpty(stockDetails) && resistance.map((value, index)=> (
                    <Text key={index} >{`Resistance ${index+1} ${value}`}</Text>
                ))
            }
            {   !isEmpty(stockDetails)  && 
                <View>
                    <Text>{`Predicted High ${demarkTheory.predictedHigh}`}</Text>
                    <Text>{`Predicted Low ${demarkTheory.predictedLow}`}</Text>
                </View>
            }
        </View>
    )
}