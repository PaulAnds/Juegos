import React from 'react';
import {Text,View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles.js';

function GuesMenuScreen({}) {

  const navigation = useNavigation();

  
    return (
        <View style={{backgroundColor:'#ab47bc'}}>
            <Text style= {{color:'#ffd600',fontSize: 22,textAlign:'center',top:'5%'}}>Two Guessing Number Games</Text>
            <View style={{display: 'flex',alignItems: 'center',height: '100%',justifyContent: 'center'}}>
                <View style ={{...styles.containerView, top: '-10%',}}>
                    <Text style = {styles.containerText}>Guess MY Number</Text>
                    <Text style = {styles.containerText}>A game where an AI is thinking of a random number and you have to guess it right in as lower tries as possible. The AI will mention if you get close to the number and if you need to go lower or higher.</Text>
                </View>
                <View style={{top: '-10%',}}>
                    <Button
                        backgroundColor = "white"
                        color="#ffd600"
                        title="GMN"
                        onPress={() => navigation.navigate('GMN')}
                    />
                </View>
                <View style ={{...styles.containerView, top: '-10%',}}>
                    <Text style = {styles.containerText}>Guess YOUR Number</Text>
                    <Text style = {styles.containerText}>A game where you think of a number in your head. The AI will try to guess your number, and you have to tell it to either go higher or lower until it guesses your number right; trying to get as low in tries.</Text>
                </View>
                <View style={{top: '-10%',}}>
                    <Button
                        backgroundColor = "white"
                        color="#ffd600"
                        title="GYN"
                        onPress={() => navigation.navigate('GYN')}
                />
                </View>
            </View>
        </View>

    );
}

export default GuesMenuScreen;