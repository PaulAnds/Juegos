import React, { useState } from 'react'
import {StyleSheet, View, Text,Image,TouchableOpacity,Button} from 'react-native';

let score = 0;
let escore = 0;
let counter = 0;

function RockPaperScissors() {
    const [enemy, setEnemy] = useState('');
    const [random, setRandom] = useState(3);
    const [text, setText] = useState('');
    const [winner, setWinner] = useState('');
    const [playing, setPlaying] = useState(true);

    const handleOnClicks = () => {
        setRandom(generateRandomNumber(4));
        setEnemy(enemyChoice(random));
        setText(calculateWinner(1,random));
        setWinner(winnerWho());
    }
    const handleOnClickr = () => {
        setRandom(generateRandomNumber(4));
        setEnemy(enemyChoice(random));
        setText(calculateWinner(2,random));
        setWinner(winnerWho());
    }
    const handleOnClickp = () => {
        setRandom(generateRandomNumber(4));
        setEnemy(enemyChoice(random));
        setText(calculateWinner(3,random));
        setWinner(winnerWho());
    }
    function winnerWho(){
        if(score >= 2 && escore < score && counter >= 3){
            setPlaying(true);
            return "YOU WON THE 2 ON 3";
        }
        else if(escore >= 2 && score < escore && counter >= 3){
            setPlaying(true);
            return "YOU LOST THE 2 ON 3";
        }
        else if(escore > score && counter === 3){
            setPlaying(true);
            return "YOU LOST THE 2 ON 3";
        }
        else if(score > escore && counter === 3){
            setPlaying(true);
            return "YOU WON THE 2 ON 3";
        }
        else if(score == escore && counter === 3){
            setPlaying(true);
            return "it was a tie at the end";
        }
        else{
            return "";
        }
    }
    return (
       <View style={styles.body}>
        <View style={styles.game}>
        <Text style={styles.title}>Welcome to Rock Paper Scissors 1.0</Text>
        <Button 
                backgroundColor = "white"
                color="#ffd600"
                title="Play"
                onPress={() => {
                    setPlaying(false);
                    score = 0;
                    escore = 0;
                    counter = 0;
                }}
            />
           <Text style={{ fontSize: 28,padding: 10}}>Score: {score} vs {escore}</Text>
           <Text style={{ fontSize: 18}}>Choose your weapon</Text>
           <Text>{text}</Text>
           <View style={{ flexDirection: 'row'}}>
           <TouchableOpacity disabled= {playing} onPress={handleOnClickr}>
                <Image style={styles.image} source={require('../assets/rock.png')}/>
           </TouchableOpacity>
           <TouchableOpacity disabled= {playing} onPress={handleOnClickp}>
                <Image style={styles.image} source={require('../assets/paper.png')}/>
           </TouchableOpacity>
           <TouchableOpacity disabled= {playing} onPress={handleOnClicks}>
                <Image style={styles.image} source={require('../assets/scissors.png')}/>
           </TouchableOpacity>
           </View>
            <Text>{enemy}</Text>
           <Text style={styles.glowing}>{winner}</Text>
        </View>
       </View> 


    )
  }

export default RockPaperScissors;

const styles = StyleSheet.create({


    body:{
      backgroundColor: '#ab47bc',
    },
  
    glowing:{
        color:"#ffd600",
        fontSize: 28,
    },

    title:{
        fontSize: 28,
      textAlign: 'center', 
      padding: 40 
    },
    image:{
        width: 100,
        height: 100
    },
    game: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
    },
  
  });


function generateRandomNumber(max, min=1) {
    return Math.floor(Math.random()*(max - min) + min);
}

function calculateWinner(player, random){
    counter++;
    if(player === random){// its a tie
        return "Its a tie";
    }
    else if(player === 1 && random === 2){ //scissors vs rock
        escore++;
        return "You Lost!";
    }
    else if(player === 1 && random === 3){ //scissors vs paper
        score++;
        return "You Won!";
    }
    else if(player === 2 && random === 1){ //rock vs scissors
        score++;
        return "You Won!";
    }
    else if(player === 2 && random === 3){ //rock vs paper
        escore++;
        return "You Lost!";
    }
    else if(player === 3 && random === 1){ //paper vs scissors
        escore++;
        return "You Lost!";
    }
    else if(player === 3 && random === 2){ //paper vs rock
        score++;
        return "You Won!";
    }
    else{
        return "error";
    }
}

function enemyChoice(random){
    if (random === 1){
        return "Enemy chose Scissors";
    }
    else if (random === 2){
        return "Enemy chose Rock";
    }
    else if (random === 3){
        return "Enemy chose Paper";
    }
    else{
        return "error";
    }


}

