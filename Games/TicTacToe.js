import React, { useState, useEffect } from "react";
import {StyleSheet,Text,View,ImageBackground,Button} from "react-native";
import bg from "../assets/bg.jpeg";
import Cell from "./Cell";

const emptyMap = [
  ["", "", ""], // 1st row
  ["", "", ""], // 2nd row
  ["", "", ""], // 3rd row
];

function TicTacToe() {
  const [map, setMap] = useState(emptyMap);
  const [currentTurn, setCurrentTurn] = useState("x");
  const [message, setMessage] = useState('');
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (currentTurn === "o") {
      botTurn();
    }
  }, [currentTurn]);

  useEffect(() => {
    const winner = getWinner(map);
    if (winner) {
      gameWon(winner);
    } else {
      checkTieState();
    }
  }, [map]);

  const onPress = (rowIndex, columnIndex) => {
    if (map[rowIndex][columnIndex] !== "") {
      return;
    }

    setMap((existingMap) => {
      const updatedMap = [...existingMap];
      updatedMap[rowIndex][columnIndex] = currentTurn;
      return updatedMap;
    });

    setCurrentTurn(currentTurn === "x" ? "o" : "x");
  };

  const getWinner = (winnerMap) => {
    // Check rows
    for (let i = 0; i < 3; i++) {
      const rowXWinning = winnerMap[i].every((cell) => cell === "x");
      const rowOWinning = winnerMap[i].every((cell) => cell === "o");

      if (rowXWinning) {
        return "x";
      }
      if (rowOWinning) {
        return "o";
      }
    }
    // Check columns
    for (let col = 0; col < 3; col++) {
      let columnXWinner = true;
      let columnOWinner = true;

      for (let row = 0; row < 3; row++) {
        if (winnerMap[row][col] !== "x") {
          columnXWinner = false;
        }
        if (winnerMap[row][col] !== "o") {
          columnOWinner = false;
        }
      }

      if (columnXWinner) {
        return "x";
      }
      if (columnOWinner) {
        return "o";
      }
    }
    // check diagonals
    let _1OWinning = true;
    let _1XWinning = true;
    let _2OWinning = true;
    let _2XWinning = true;
    for (let i = 0; i < 3; i++) {
      if (winnerMap[i][i] !== "o") {
        _1OWinning = false;
      }
      if (winnerMap[i][i] !== "x") {
        _1XWinning = false;
      }

      if (winnerMap[i][2 - i] !== "o") {
        _2OWinning = false;
      }
      if (winnerMap[i][2 - i] !== "x") {
        _2XWinning = false;
      }
    }

    if (_1OWinning || _2OWinning) {
      return "o";
    }
    if (_1XWinning || _2XWinning) {
      return "x";
    }
  };

  const checkTieState = () => {
    if (!map.some((row) => row.some((cell) => cell === ""))) {
      setMessage('Its a tie!');
      setPlaying(false);
    }
  };

  const gameWon = (player) => {
    setMessage('Winner: ' + player);
    setPlaying(false);
  };

  const copyArray = (original) => {
    //copia el arreglo actual
    const copy = original.map((arr) => {
      return arr.slice();
    });
    return copy;
  };

  const botTurn = () => {
    // checa todas las opciones de donde poner
    const possiblePositions = [];
    map.forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
        if (cell === "") {
          possiblePositions.push({ row: rowIndex, col: columnIndex });
        }
      });
    });

    let chosenOption;

      possiblePositions.forEach((possiblePosition) => {
        //hace una copia del mapa actual
        const mapCopy = copyArray(map);

        //se va a poner el o donde se escoja
        mapCopy[possiblePosition.row][possiblePosition.col] = "o";

        //si puede ganar entonces escoje gana
        const winner = getWinner(mapCopy);
        if (winner === "o") {
          chosenOption = possiblePosition;
        }
      });
      
      //si no tiene posibilidad de ganar checa si tu vas a ganar
      if (!chosenOption) {
        possiblePositions.forEach((possiblePosition) => {
          //hace una copia del mapa actual
          const mapCopy = copyArray(map);

          //se va a poner el x donde se escoja
          mapCopy[possiblePosition.row][possiblePosition.col] = "x";

          //si ve donde la x puede ganar, entonces pone ahi
          const winner = getWinner(mapCopy);
          if (winner === "x") {
            chosenOption = possiblePosition;
          }
        });
    }

    //codigo principal
    if (!chosenOption) {
      chosenOption =
        possiblePositions[Math.floor(Math.random() * possiblePositions.length)];
    }

    if (chosenOption) {
      onPress(chosenOption.row, chosenOption.col);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.bg} resizeMode="contain">
        <Text style={{fontSize: 24,color: "black", position: "absolute",top: 50,}}>
          Current Turn: {currentTurn.toUpperCase()}
        </Text>
        <Text style={styles.top}>{message}</Text>
        <View style={styles.map}>
          {map.map((row, rowIndex) => (
            <View key={`row-${rowIndex}`} style={styles.row}>
              {row.map((cell, columnIndex) => (
                <Cell
                  isDisabled = {!playing}
                  key={`row-${rowIndex}-col-${columnIndex}`}
                  cell={cell}
                  onPress={() => onPress(rowIndex, columnIndex)}
                />
              ))}
            </View>
          ))}
        </View>
      </ImageBackground>
      <View style={{top:"-84%"}}>
      <Button 
          disabled = {playing}
          backgroundColor = "white"
          color="#ffd600"
          title="Restart"
          onPress={() => {
            setPlaying(true);
            setMessage('');
            setMap([
              ["", "", ""], // 1st row
              ["", "", ""], // 2nd row
              ["", "", ""], // 3rd row
            ]);
            setCurrentTurn("x");
          }}
        />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ab47bc",
  },
  bg: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",

    paddingTop: 15,
  },
  map: {
    top: '32%',
    position: "absolute",
    width: "80%",
    aspectRatio: 1,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  buttons: {
    position: "absolute",
    bottom: 50,
    flexDirection: "row",
  },
  top:{
    position: "absolute",
    bottom: '75%',
    color:"#ffd600",
    fontSize: 28,
    textShadowColor: '#f5f7c3',
    textShadowRadius: 15,
    textAlign: 'center',
},
  button: {
    color: "white",
    margin: 10,
    fontSize: 16,
    backgroundColor: "#191F24",
    padding: 10,
    paddingHorizontal: 15,
  },
});

export default TicTacToe;