import { View, Text, SafeAreaView, ScrollView,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Flatcards from './proj/Flatcards'
import ElevatedCards from './proj/ElevatedCards'
import FancyCard from './proj/FancyCard'
import Darkmode from './proj/Darkmode'
import BlogCard from './proj/BlogCard'
import Contactlist from './proj/Contactlist'
import PassGenerator from './proj/PassGenerator'
import BgChanger from  './proj/BgChanger'
import Dice from  './proj/Dice'
import CurrencyConverter from './proj/CurrencyConverter'
import TicTacToe from './proj/Tttoe'



const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <SafeAreaView style={[styles.container, darkMode && styles.darkModeBackground]}>
      <ScrollView>
        <Darkmode darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <TicTacToe darkMode={darkMode} />
        <CurrencyConverter darkMode={darkMode} />
        <Dice darkMode={darkMode} />
        <BgChanger darkMode={darkMode} />
        <PassGenerator darkMode={darkMode}/>
        <Contactlist darkMode={darkMode} />
        <FancyCard darkMode={darkMode} />
        <BlogCard darkMode={darkMode} />
        <ElevatedCards darkMode={darkMode} />
        <Flatcards darkMode={darkMode} />
        
      </ScrollView>    
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  darkModeBackground: {
    backgroundColor: '#333',
  },
});

export default App