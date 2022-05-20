import React from 'react';
import {View, Text, Image,Button} from 'react-native';
import styles from './styles.js';

function DetailScreen({route, navigation}){

  const{title, id, description,url,stock} = route.params;

    navigation.setOptions({
    title: title, 
    headerRight: () => (
      <Button 
        title= "Buy"
        onPress={() => {}}
        disabled={(stock === 0)}
      />
    ),
  });
    return(
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#ab47bc'}}>
            <Image style = {styles.pic} source={{uri: url,}}/>
        <View style={styles.containerView}> 
            <Text style = {styles.containerText}>{title}</Text>
            <Text style = {styles.containerText}> : {description}</Text>
            <Text style = {styles.containerText}> Stock: {stock}</Text>
        </View>
        </View>
    );
}

export default DetailScreen;