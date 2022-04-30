import { StyleSheet } from 'react-native';
import colors from '../../resources/colors';
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        alignSelf: 'center',
    },
    column: {
        width: '50%',
    },
    column1: {
        paddingRight: 10,
    },
    column2: {
        paddingLeft: 10,
        paddingTop: 10,
    },
    text: {
        fontSize: 14,
        marginBottom: 0,
    },
    title: {
        paddingBottom: 4,
        marginTop: 0,
    },
    imageContainer: {
        height: '100%',
    },
    image: {
        borderRadius: 20,
        aspectRatio: null,
        minHeight: 150,
        height: '100%',
        width: '100%',
        borderColor: 'transparent',
    },
    tags: {
        paddingLeft: 0,
    },
    avatar: {
        width: 40,
        marginRight: 15,
    },
    avatarText: {
        fontSize: 15,
    },
    roomie: {
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 5,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    roomieName: {
        fontSize: 20,
        fontFamily: 'SourceSans3SemiBold',
        lineHeight: 30,
    },
    paginationContainer: {
        paddingBottom: 0,
        paddingTop: 20,
    },
    paginationDots: {
        width: 7,
        height: 7,
        borderRadius: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    editbutton: {
        position: 'absolute',
        width: '90%',
        bottom: 0,
        textAlign: 'center',
        alignSelf: 'center',
    },
    icon: {
        right: 0,
        top: 0,
        width: '100%',
        alignContent: 'flex-end',
    },
});

export default styles;
