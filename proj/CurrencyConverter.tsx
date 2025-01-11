import { FlatList, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Snackbar from 'react-native-snackbar';
import CurrencyButton from '../src/CurrencyButton';
import { currencyByRupee } from '../src/const';

interface CurrencyConverterProps {
  darkMode: boolean; // Add darkMode prop
}

const CurrencyConverter: React.FC<CurrencyConverterProps> = ({ darkMode }): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const handleInput = (currency: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Please enter a value',
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }
    const inputAmount = parseFloat(inputValue);
    if (isNaN(inputAmount)) {
      return Snackbar.show({
        text: 'Enter a valid number',
        backgroundColor: '#F4BE2C',
        textColor: '#000000',
      });
    }
    const resultValue = (inputAmount * currency.value).toFixed(2);
    setResult(`${currency.symbol} ${resultValue}`);
    setTargetCurrency(currency.name);
  };

  return (
    <>
      <StatusBar />
      <SafeAreaView style={[styles.container, darkMode && styles.darkModeBackground]}>
        <Text style={[styles.heading, darkMode && styles.darkModeText]}>Currency Converter</Text>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>Rs.</Text>
            <TextInput
              maxLength={14}
              value={inputValue}
              clearButtonMode='always' //only for iOS
              onChangeText={setInputValue}
              keyboardType='number-pad'
              placeholder='Enter amount in Rupees'
              style={styles.inputAmountField}
            />
          </View>
          {result && <Text style={styles.resultTxt}>{result}</Text>}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <Pressable
                style={[
                  styles.button,
                  targetCurrency === item.name && styles.selected,
                ]}
                onPress={() => handleInput(item)}
              >
                <CurrencyButton {...item} />
              </Pressable>
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: '#515151',
    paddingTop: 20,
  },
  darkModeBackground: {
    backgroundColor: '#333',
  },
  heading: {
    fontSize: 25,
    color: 'cyan',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  darkModeText: {
    color: 'yellow',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,
    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,
    margin: 12,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

export default CurrencyConverter;
