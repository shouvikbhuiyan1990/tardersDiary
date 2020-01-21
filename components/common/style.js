import { 
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    tableContainer: {
        display: 'flex'
    },
    tableRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 8,
        paddingRight: 6
    }
});

export default styles;