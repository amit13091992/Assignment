import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({

    container: { width: "100%", height: "100%", justifyContent: "center", alignItems: "center" },

    chatbg: { width: "100%", height: "100%", alignItems: "center" },

    bottomTab: { position: 'absolute', bottom: 0, width: '100%' },

    flatListStyle: { width: '100%' },

    cardStyles: {
        paddingVertical: 8,
        width: '90%',
        marginTop: 5,
        marginHorizontal: 10,
        elevation: 0,
        shadowColor: 'rgba(3, 147, 141,0.6)',
        height: 60
    },

    lookingforLabel: {
        fontSize: 14,
        color: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        marginLeft: -5
    },

    searchView: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        width: '100%',
        alignSelf: 'flex-start',
        alignItems: 'center',
        borderRadius: 25,
        borderColor: '#bababa',
        borderWidth: 1,
    },

    flatView: { marginTop: 10, width: "100%", height: "100%", padding: 8, },

    icon: { marginLeft: 15, marginRight: 15, },

    btmView: { height: 170 },

    // card Item Styles

    cardItem: { paddingVertical: 8, marginVertical: 3, justifyContent: 'center', flex: 1 },

    itembg: { width: "100%", alignItems: 'center' },

    imgView: { flex: 0.7, alignItems: "center" },

    imgbg: { width: 180, height: 180, marginStart: 8, marginEnd: 8, borderRadius: 10 },

    chatView: { flexDirection: 'row', width: '80%', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 },

    name: { fontWeight: "bold" },

    time: { color: "#568aba", fontWeight: "bold" },

    dec: { color: "#bababa", fontWeight: "bold", },

});

export default styles;