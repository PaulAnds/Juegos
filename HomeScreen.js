import React from 'react';
import {Text,View,Button,Image} from 'react-native';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';

function HomeScreen({}) {
    const navigation = useNavigation();
    return (
        <View style ={styles.container}>
            <Image
          style={{ width: '100%', height: 200, marginBottom: 100 }}
          source={require("./assets/gaming.png")}
        />
            <Text style={styles.text}>PaulAnds Inc.</Text>
            <Text style={styles.desc}> An app for all my games  </Text>
          <Button 
                backgroundColor = "white"
                color="#ffd600"
                title="Games"
                onPress={() => navigation.navigate("GameScreen", {
                    id: 1,
                    title: "nombre de camisa",
                    description: 'This is where the description goes',
                    url: 'this is where the url goes',
                })}
            />
            
        </View>

    );
}

export default HomeScreen;