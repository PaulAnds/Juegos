import React, { useState } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import List from './List';

function mapItems(items){
    return items.map((value, i) => ({key:i.toString(), value}));
}

function generateRandomNumber(max, min = 1){
    return Math.floor(Math.random()*(max - min) + min);
}

const GuessYourNumber = () => {
    const [AINumber, setAINumber] = useState(generateRandomNumber(100))
    const [guessList, setGuessList] = useState([])
    const [win, setWin] = useState(false)
    const [count, setCount] = useState(1)
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(101)
    const [playing, setPlaying] = useState(false)
    

    const handleOnPress = (mayor = false) => {
        if(mayor){
            setMin(AINumber)
            setAINumber(generateRandomNumber(max , AINumber + 1))
        } 
        else{
            setMax(AINumber);
            setAINumber(generateRandomNumber(AINumber, min + 1))
        }
       
        setGuessList([
            AINumber,
            ...guessList
        ]);
        setCount(count + 1)
    }   

    
 
    return (
        <View style={styles.body}>
            <View style = {styles.button}>
            <Button 
              disabled = {playing}
              backgroundColor = "white"
              color="#ffd600"
              title="Play"
              onPress={() => {
                setWin(false);
                setAINumber(generateRandomNumber(100));
                setCount(1);
                setMin(0);
                setMax(100);
                setPlaying(true);
                setGuessList([
                    
                  ]);
            }}
            />
          </View>
                <View style={styles.game}>
                    <Text style={styles.text}>The AI guessed: <Text style={{fontWeight: 'bold'}}>{AINumber}</Text></Text>
                    <Text style={styles.text}>My number is: </Text>

                    <View>
                        <Button 
                            title = "Higher"
                            color="#ffd600"
                            onPress={() => handleOnPress(true)}
                            disabled = {!playing}
                        />
                        <Button 
                            title = "Thats it"
                            color="#ffd600"
                            onPress={() => {
                                setWin(true)
                                setPlaying(false);
                                setGuessList([
                                    AINumber,
                                    ...guessList
                                ]);
                            }}
                            disabled = {!playing}
                        />
                        <Button 
                            title = "Lower"
                            color="#ffd600"
                            onPress={() => handleOnPress(false)}
                            disabled = {!playing}
                        />
                    </View>
                    {
                        win 
                        && <Text style={styles.glowing}>The AI found the number in<Text  style={{fontWeight: 'bold'}}> {count}</Text> tries.</Text>
                    }

                <List data = {mapItems(guessList)}/>
                </View>
        </View>
  )
}

const styles = StyleSheet.create({
    body:{
        backgroundColor: '#ab47bc',
      },
      button:{
        top:'13%'
        
      },
      game: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        top:'17%'
      },
      text:{
        fontSize:22,
        textAlign: 'center',
        padding: 30,
      },
      glowing:{
        color:"#ffd600",
        fontSize: 28,
        textShadowColor: '#f5f7c3',
        textShadowRadius: 15,
    },
      input: {
          width: 200,
          textAlign: 'center',
          marginBottom: 10,
      },
   
  })

  export default GuessYourNumber;