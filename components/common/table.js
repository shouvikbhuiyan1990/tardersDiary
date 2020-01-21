import React from 'react';

import {
    View,
    Text
} from 'react-native';
import styles from './style';

export default ({tabledata = [], countText}) => (
    <View style={styles.tableContainer}>
        {
            tabledata.map((value, index) => (
                <View style={styles.tableRow}>
                    <Text>{`${countText} ${index+1}`}</Text>
                    <Text>{value}</Text>
                </View>
            ))
        }
    </View>
);