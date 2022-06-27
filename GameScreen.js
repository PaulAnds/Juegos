import React from 'react';
import {StyleSheet,View,ScrollView,Text} from 'react-native';
import Box from './Box'
import tasks from './data/tasks';

function GameScreen({}) {
        
    return (
        <View style={{backgroundColor: '#ab47bc', height: '100%'}}>
          <Text style={styles.top}>*Once in a game click 'Play' to start*</Text>
          <ScrollView style={styles.scrollView}>
            <View style = {styles.root}>
              {
                tasks.map((task,i) => (
                  <Box 
                    key={i}
                    url = {task.url}
                    game = {task.game}
                    title= {task.title}
                    butt= {task.butt}
                    description = {task.description}
                  />
                ))
              }
            </View>
          </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
  root:{
    marginRight: 'auto',
    marginLeft: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',  
    borderRadius: 50,
    marginTop: 10,
    padding: 11,
    overflow: 'hidden',

    width: '85%',
    height: 'auto',
  },

  top:{
      color:"#ffd600",
      fontSize: 23,
      textShadowColor: '#f5f7c3',
      textShadowRadius: 15,
      textAlign: 'center',
  },

  scrollView: {
    marginBottom: 50,
  },
  
})

export default GameScreen;