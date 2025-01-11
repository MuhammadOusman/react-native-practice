import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface ElevatedCardsProps {
  darkMode: boolean;
}

const ElevatedCards: React.FC<ElevatedCardsProps> = ({ darkMode }) => {
  const cards = [
    { text: 'I' },
    { text: 'am' },
    { text: 'za' },
    { text: 'goat' },
    { text: ':)' },
  ];

  return (
    <View style={[styles.container, darkMode && styles.darkModeBackground]}>
      <Text style={[styles.heading, darkMode && styles.darkModeText]}>Elevated Cards</Text>
      <ScrollView horizontal={true} contentContainerStyle={styles.scrollViewContainer}>
        {cards.map((card, index) => (
          <View
            key={index}
            style={[
              styles.card,
              styles.cardelevated,
              darkMode
                ? { backgroundColor: getRandomDarkColor() }
                : { backgroundColor: getRandomLightColor() },
            ]}
          >
            <Text style={[styles.ctext, darkMode && styles.darkModeCText]}>{card.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 25,
    color: 'cyan',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  darkModeBackground: {
    backgroundColor: '#333',
  },
  darkModeText: {
    color: 'yellow',
  },
  card: {
    flex: 1,
    width: 100,
    height: 100,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  cardelevated: {
    elevation: 20, 
    shadowColor: '#000',
    shadowRadius: 15, 
    shadowOpacity: 0.8, 
    shadowOffset: {
      width: 5,
      height: 5,
    },
  },
  ctext: {
    fontSize: 25,
    fontFamily: 'Times New Roman',
    color: 'cyan',
    paddingHorizontal: 20,
    paddingVertical: 20,
    fontWeight: 'bold',
  },
  darkModeCText: {
    color: '#fff',
  },
  scrollViewContainer: {
    paddingHorizontal: 20, 
  },
});

function getRandomLightColor() {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomDarkColor() {
  const colors = ['darkred', 'darkorange', 'darkyellow', 'darkgreen', 'darkblue', 'darkpurple'];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default ElevatedCards;