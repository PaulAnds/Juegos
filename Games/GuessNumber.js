import React, {useState} from 'react';
import {StyleSheet, View, Button, TextInput, Text} from 'react-native';
import List from './List';

function mapItems(items){
  return items.map((value, i) => ({key:i.toString(), value}));
}

function generateRandomNumber(max, min = 1){
  return Math.floor(Math.random()*(max - min) + min);
}

function calculateText(number, random){
  const soClose = 5;
  const diff = Math.abs(random - number);

  if(diff < soClose){
    if (number < random){
      return "Youre close, but your number is low"
    }else{
      return "Youre close, but your number is high"
    }
  }else{
    if (number < random){
      return "The number is way to low"
    }else{
      return "The number is way to high"
    }
  }
}

const random = generateRandomNumber(100);

function GuessNumber(props) {
  const [playing, setPlaying] = useState(false);
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [guessList, setGuessList] = useState([]);
  const [win, setWin] = useState(false);
  const [rand,setRand] = useState(random);
  const [count, setCount] = useState(0);

  const handleOnChange = (newNumber) => {
    setNumber(newNumber);
  }

  

  const handleOnPress = () => {
    const num = parseInt(number);
    const text = calculateText(num, rand);
    if(num === rand){
      setPlaying(false);
      setMessage('');
      setGuessList([
        0,
      ]);
      setWin(true);
      setRand(generateRandomNumber(100));
      setCount(0);
    }

    setNumber("");
    setMessage(text);
    setGuessList([
      num,
      ...guessList
    ]);

    setCount(count + 1);
  }

    return (
        <View style={styles.body}>
          <View style = {styles.button}>
            <Button 
              backgroundColor = "white"
              color="#ffd600"
              title="Play"
              onPress={() => {
                setPlaying(true);
              
            }}
            />
          </View>
          <View style={styles.game}>
          <TextInput
            editable={playing}
            style={styles.input}
            autoFocus
            placeholder="Guess My Number"
            onChangeText = {handleOnChange}
            defaultValue = {number}
          />

          <Button
          disabled = {!playing}
            title="Check"
            backgroundColor = "white"
            color="#ffd600"
            onPress={handleOnPress}
          />
          {
            win?
            <Text>Congratulations! you found the number in {count} tires</Text>
            :
            <Text>{message}</Text>
          }
          <List data = {mapItems(guessList)}/>
        </View>
        </View>
    );
}


const styles = StyleSheet.create({

  body:{
    backgroundColor: '#ab47bc',
  },

  game: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    top: '20%',
      
  },

  button:{
    top:'13%'
    
  },

  input: {
      width: 200,
      textAlign: 'center',
      marginBottom: 10,
  },

});

export default GuessNumber;

