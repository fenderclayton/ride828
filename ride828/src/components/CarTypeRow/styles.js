import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        },
    image: {
        height: 60,
        width: 60,
        resizeMode: 'cover',
        borderRadius: 400
    },

    middleContainer: {
        flex: 1,
        marginHorizontal: 10,
    },



    type: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },
    time: {
        color: '#5d5d5d',

    },
    rightContainer: {
        width: 100,
        justifyContent: 'flex-end',
        flexDirection: 'row'

    },


    price: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 5,

    },
     });

export default styles;
