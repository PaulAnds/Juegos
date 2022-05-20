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
          source={require("./assets/banner.png")}
        />
            <Text style={styles.text}>Welcome</Text>
            <Text style={styles.desc}>
I have learned from Peep fans that Gus was a powerful and influential lyricist and music artist. It was Gus’s honesty that compelled so many people, worldwide, to connect with him. Gus was particularly observant, and able to express his observations clearly and poetically.</Text>
            <Button 
                backgroundColor = "white"
                color="#ffd600"
                title="Go to Store!"
                onPress={() => navigation.navigate("Store", {
                    id: 1,
                    title: "nombre de camisa",
                    description: 'This is where the description goes',
                    url: 'this is where the url goes',
                    stock: 100
                })}
            />
            
        </View>

    );
}

export default HomeScreen;