import React from 'react';
import {StyleSheet, View, Button, Text,Image} from 'react-native';
import {useNavigation} from '@react-navigation/native'

function Box ({title, id, description, url, stock}){

    const navigation = useNavigation();

    return (
        <View style={styles.root}>
            <Image style = {styles.pic} source={{uri: url,}}/>
            <Text>{title}</Text>
            <Text>{description}</Text>
        
                <Button 
                    color = "#ffd600"
                    title = "Ver"
                    onPress={
                      () => navigation.navigate('Details', {
                      id: id,
                      title:title,
                      description: description,
                      url: url,
                      stock: stock
                    })}
                 />
        </View>
    );
}

const styles = StyleSheet.create({
    root:{
        width: '43%',
        height: 210,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#b47cff',
        borderWidth: 1,
        margin: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    pic:{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: 130, 
        height: 150,
        marginBottom: 10,
    }
})
export default Box;