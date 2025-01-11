import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

interface FancyCardProps {
  darkMode: boolean;
}

export default function FancyCard({ darkMode }: FancyCardProps) {
  return (
    <View>
      <Text style={[styles.headingtext, darkMode && styles.darkModeHeadingText]}>FancyCard</Text>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://w0.peakpx.com/wallpaper/1021/778/HD-wallpaper-supra-love-car-imported-japan-stancenation-toyota-toyota-supra-tuning.jpg'
          }}
          style={styles.image}
          resizeMode='cover'
        />
        <View style={styles.cardbody}>
          <Text style={[styles.header, darkMode && styles.darkModeHeaderText]}>TOYOTA SUPRA MK4</Text>
          <Text style={[styles.label, darkMode && styles.darkModeLabelText]}>2JZ-GTE 320 BHp</Text>
          <Text style={[styles.body, darkMode && styles.darkModeBodyText]}>
            The Toyota Supra MK4, produced between 1993 and 2002, is a legendary sports car that has captured the hearts of automotive enthusiasts worldwide. Boasting a powerful 3.0-liter inline-six engine, it offers both naturally aspirated and turbocharged options, with the turbo variant generating an impressive 276 horsepower. Its lightweight chassis and advanced aerodynamics provide exceptional handling and speed, making it a standout in its class.
          </Text>
          <Text style={[styles.footer, darkMode && styles.darkModeFooterText]}>80,000$</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingtext: {
    fontSize: 25,
    color: 'cyan',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  darkModeHeadingText: {
    color: 'yellow', 
  },
  card: {
    flex: 1,
    height: 600,
    margin: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 8,
    
    backgroundColor: 'orange',
    elevation:  20,
    shadowOffset:{
      height: 15,
      width: 15
    },
    shadowColor: 'black',
    shadowRadius: 20,
    shadowOpacity: 0.8
  },
  image: {
   marginTop: 8,
    width: '95%',
    height: 350,
    borderTopRightRadius:  15,
    borderBottomRightRadius:  15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15
  },
  cardbody: {
    padding: 20
  },
  footer: {
    margin:  10,
    fontSize: 10,
    color: 'blue'
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  },
  darkModeHeaderText: {
    color: 'white', 
  },
  label: {
    fontSize: 16,
    color: 'yellow',
    marginHorizontal:  10

  },
  darkModeLabelText: {
    color: 'yellow', 
  },
  body: {
    fontSize: 14,
    color: 'black'
  },
  darkModeBodyText: {
    color: 'white', // 
  },
  darkModeFooterText: {
    color: 'blue', 
  }
});