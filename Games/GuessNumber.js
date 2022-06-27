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
  const [shouldShow, setShouldShow] = useState(true);

  const handleOnChange = (newNumber) => {
    setNumber(newNumber);
  }

  

  const handleOnPress = () => {
    const num = parseInt(number);
    const text = calculateText(num, rand);
    if(num === rand){
      setPlaying(false);
      setWin(true);
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
        <Text style={styles.top}>*Click 'Play' to start*</Text>
          <View style = {styles.button}>

          <Button 
          disabled = {playing}
          backgroundColor = "white"
          color="#ffd600"
          title="Play"
          onPress={() => {
            setPlaying(true);
            setMessage('');
            setWin(false);
            setCount(0);
            setRand(generateRandomNumber(100));
            setGuessList([
    
            ]);
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
            <Text style={styles.text}> Congratulations!, You found the number in <Text  style={{...styles.text,fontWeight: 'bold'}}> {count}</Text> tries.</Text>
                     :
            <Text style={styles.text}>{message}</Text>
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

  text:{
    fontSize:22,
    textAlign: 'center',
    padding: 30,
  },
  top:{
    color:"#ffd600",
    fontSize: 30,
    textShadowColor: '#f5f7c3',
    textShadowRadius: 15,
    textAlign: 'center',
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
    fontSize:22,
      width: 200,
      textAlign: 'center',
      marginBottom: 10,
  },

});

export default GuessNumber;

