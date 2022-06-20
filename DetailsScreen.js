import React from 'react';
import {View, Text,Button} from 'react-native';
import styles from './styles.js';

function DetailScreen({route, navigation}){

  const{title, description, game} = route.params;

    navigation.setOptions({
    title: title, 
  });
  
    return(
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#ab47bc'}}>
         <Button 
                backgroundColor = "white"
                color="#ffd600"
                title={title}
                onPress={() => navigation.navigate(game)}
            />
        <View style={styles.containerView}> 
            <Text style = {styles.containerText}>{description}</Text>
        </View>
        </View>
    );
}

export default DetailScreen;