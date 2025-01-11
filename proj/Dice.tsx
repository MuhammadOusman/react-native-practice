import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: true,
  };

const diceface =[
    'https://static-00.iconduck.com/assets.00/dice-1-icon-512x512-fr5yy7n7.png',
    'https://static-00.iconduck.com/assets.00/dice-2-icon-512x512-2fqsb3m0.png',
    'https://static-00.iconduck.com/assets.00/dice-3-icon-2048x2048-hc5gcs4z.png',
    'https://static-00.iconduck.com/assets.00/dice-four-icon-512x512-n41or7ly.png',
    'https://static-00.iconduck.com/assets.00/dice-5-icon-512x512-0ps13pr4.png',
    'https://static-00.iconduck.com/assets.00/dice-6-icon-2048x2048-42qef3py.png'

]

interface DiceProps {
    darkMode: boolean;
}

const Dice: React.FC<DiceProps> = ({darkMode}) => {
    const [currentface,setcurrentface]= useState(diceface[0]);

    const rolldice= ()=> {
        const random= Math.floor(Math.random()*diceface.length);
        setcurrentface(diceface[random]);
        ReactNativeHapticFeedback.trigger('impactHeavy',{ enableVibrateFallback: true });
    }
    return (
    <View>
      <Text style={[styles.heading , darkMode && styles.darkModeheading]}>Dice(Haptic-Feedback)</Text>
      <View style={styles.container}>
        <Image
        source={{ uri: currentface}}
        style={styles.img} 
        />
        <TouchableOpacity style={styles.button}
        onPress={rolldice}
        >
            <Text style={styles.text}>Roll The Dice </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    img:{
        width: 100,
        height: 100,
        borderRadius: 10,
        marginBottom: 15
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
      text:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#227093',
        margin: 2
      },
      container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        marginHorizontal:  20,
        backgroundColor: '#33d9b2',
        height: 300,
        width: 'auto',
        borderRadius: 20
      },
      button:{
        alignItems: 'center',
        height: 30,
        width: 130,
        borderRadius: 15,
        borderColor: '#227093',
        borderWidth: 1,
      }
});
export default Dice;