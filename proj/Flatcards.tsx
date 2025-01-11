import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

interface FlatcardsProps {
  darkMode: boolean;
}

const Flatcards: React.FC<FlatcardsProps> = ({ darkMode }) => {
  return (
    <View style={[ darkMode && styles.darkModeBackground]}>
      <View>
        <Text style={[styles.heading, darkMode && styles.darkModeText]}>Flat Cards</Text>
      </View>
      <View style={styles.cardContainer}>
        <View style={[styles.card, styles.card1, darkMode && styles.card1DarkMode]}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Red</Text>
        </View>
        <View style={[styles.card, styles.card2, darkMode && styles.card2DarkMode]}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Blue</Text>
        </View>
        <View style={[styles.card, styles.card3, darkMode && styles.card3DarkMode]}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Green</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    color: 'cyan',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    padding: 20,
    borderRadius: 8,
    margin: 5,
  },
  card1: {
    backgroundColor: 'red',
  },
  card2: {
    backgroundColor: 'blue',
  },
  card3: {
    backgroundColor: 'green',
  },
  card1DarkMode: {
    backgroundColor: 'darkred', // or any other dark color you prefer
  },
  card2DarkMode: {
    backgroundColor: 'darkblue', // or any other dark color you prefer
  },
  card3DarkMode: {
    backgroundColor: 'darkgreen', // or any other dark color you prefer
  },
  darkModeBackground: {
    backgroundColor: '#333',
  },
  darkModeText: {
    color: 'yellow', 
  },
});

export default Flatcards;