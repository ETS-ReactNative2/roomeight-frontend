import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    input: {
        backgroundColor: '#e7e5e4',
        //height: 30,
        padding: 10,
        fontFamily: 'SourceSans3Regular',
        fontSize: 16,
        borderRadius: 4,
    },
    label: {
        fontFamily: 'SourceSans3SemiBold',
        fontSize: 18,
        lineHeight: 24,
    },
    error: {
        borderWidth: 1,
        borderColor: 'red',
    },
    valid: {
        borderWidth: 1,
        borderColor: 'green',
    },
});

export default styles;
