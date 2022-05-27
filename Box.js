import React from 'react';
import {StyleSheet, View, Button, Text,Image,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'

function Box ({title, id, description, url,}){

    const navigation = useNavigation();

    return (
        <View style={styles.root}>
            <TouchableOpacity style={styles.button} 
            onPress={
                ()=>{navigation.navigate('Details', {
                    id: id,
                    title:title,
                    description: description,
                    url: url
                    })}}>
                    
                <Image style={{ width: 100, height: 100}} source={{uri: url}}/>
            </TouchableOpacity>
            <Text style = {{color: "#ffd600", fontWeight: "bold",fontSize: 20}}>{title}</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    root:{
        width: 134,
        height: 165,
        alignItems: 'center',
        backgroundColor: '#b47cff',
        margin: 10,
        borderRadius: 20
    },
    button: {
        padding: 10,
        marginBottom: 20,
        shadowColor: '#303838',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
      },
})
export default Box;