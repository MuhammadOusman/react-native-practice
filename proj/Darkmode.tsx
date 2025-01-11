import { StyleSheet, Text, View, Switch } from 'react-native';
import React from 'react';

interface DarkmodeProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const Darkmode: React.FC<DarkmodeProps> = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <View style={[styles.container, darkMode && styles.darkModeBackground]}>
      <Text style={[styles.text, darkMode && styles.darkModeText]}>Dark Mode</Text>
      <Switch value={darkMode} onValueChange={toggleDarkMode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end' ,
    flexDirection:  'row',
    maxWidth: '98%'
  },
  text: {
    fontSize: 15,
    color: 'cyan',
    paddingVertical: 2,
  },
  darkModeBackground: {
    backgroundColor: '#333',
  },
  darkModeText: {
    color: 'yellow',
  },
});

export default Darkmode;