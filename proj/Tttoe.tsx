import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';

type BoardType = (string | null)[];

interface TttProps {
    darkMode: boolean;
  }
  
  const TicTacToe: React.FC<TttProps> = ({ darkMode }) => {

  const [board, setBoard] = useState<BoardType>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<string | null>(null);

  const handlePress = (index: number): void => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    checkWinner(newBoard);
  };

  const checkWinner = (board: BoardType): void => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6],            // Diagonals
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }

    if (!board.includes(null)) {
      setWinner('Draw');
    }
  };

  const resetGame = (): void => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  const renderSquare = (index: number) => {
    return (
      <TouchableOpacity
        style={[styles.square, board[index] === 'X' ? styles.xSquare : styles.oSquare]}
        onPress={() => handlePress(index)}
      >
        <Text style={[styles.squareText, board[index] === 'X' ? styles.xText : styles.oText]}>
          {board[index]}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
        <Text style={[styles.heading , darkMode && styles.darkModeheading]}>
        Tic-Tac-Toe
      </Text>
    
  <View style={styles.container}>
      
      <View style={styles.board}>
        <View style={styles.row}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </View>
        <View style={styles.row}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </View>
        <View style={styles.row}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </View>
      </View>

      {winner ? (
        <Text style={styles.winnerText}>
          {winner === 'Draw' ? 'It\'s a Draw!' : `Winner: ${winner}`}
        </Text>
      ) : (
        <Text style={styles.turnText}>Next Player: {isXNext ? 'X' : 'O'}</Text>
      )}

      <View style={styles.buttonContainer}>
        <Button title="Reset Game" onPress={resetGame} color="#6200EA" />
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 25,
    color: 'cyan',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  darkModeheading:{
    color: 'yellow'
  },
  
  board: {
    width: 320,
    height: 320,
    borderWidth: 5,
    borderColor: 'purple',
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    width: 106,
    height: 106,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'yellow',
  },
  xSquare: {
    backgroundColor: '#EDE7F6',
  },
  oSquare: {
    backgroundColor: '#FFEBEE',
  },
  squareText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  xText: {
    color: '#6200EA',
  },
  oText: {
    color: '#D32F2F',
  },
  turnText: {
    fontSize: 24,
    marginTop: 20,
    color: '#333',
  },
  winnerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#388E3C',
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 30,
    width: 200,
  },
});

export default TicTacToe;
