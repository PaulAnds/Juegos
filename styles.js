import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ab47bc",
    },

    text: {
        color: "#000",
        fontSize: 45,
        marginBottom: 10,
    },
    desc: {
        color: "#ffff",
        fontSize: 15,
        marginBottom: 10,
        color: 'lightgrey',
        alignItems: 'center',

    },
    containerView:{
        top: '-10%',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#b47cff',
        margin: 20,
        padding: 5,
        width:300,
        height: 200,
    },
    
    containerText:{
        color: '#ffd600',
        textAlign: 'center',
        fontSize: 18,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
})