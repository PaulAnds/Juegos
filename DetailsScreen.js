import React from 'react';
import {View, Text,Button} from 'react-native';
import styles from './styles.js';

function DetailScreen({route, navigation}){

  const{title, description, game, butt} = route.params;

    navigation.setOptions({
    title: title, 
  });
  
    return(
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#ab47bc'}}>
        <Text style = {{...styles.containerText, top:'-14%'}}>{title}</Text>
          <View style={styles.containerView}> 
            <Text style = {styles.containerText}>{description}</Text>
          </View>
          <Button 
            backgroundColor = "white"
            color="#ffd600"
            title={butt}
            onPress={() => navigation.navigate(game)}
          />
        </View>
    );
}

export default DetailScreen;