import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ab47bc",
    },

    text: {
        color: "#ffff",
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
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#b47cff',
        margin: 20,
        padding: 5,
        width:300,
        height: 100,
    },
    
    containerText:{
        color: '#ffd600',
        fontSize: 24,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
})