import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    inputText: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: 'grey',
        borderWidth: 2

    },
    container: {
        minWidth: '80%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    item: {
        padding: 10
    }
});

export default styles;