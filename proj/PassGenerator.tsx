import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const passschema = Yup.object().shape({
  passlen: Yup.number()
    .min(4, 'Pass should be at least 4 characters')
    .max(16, 'Password should be max 16 characters')
    .required('Length is required'),
});

interface IdkProps {
  darkMode: boolean;
}

const Idk: React.FC<IdkProps> = ({ darkMode }) => {
  const [pass, setPass] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbols, setSymbols] = useState(false);
  

  const generatePassString = (passLen: number) => {
    let charList = '';

    if (lowercase) charList += 'abcdefghijklmnopqrstuvwxyz';
    if (uppercase) charList += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (number) charList += '0123456789';
    if (symbols) charList += '!@#$%^&*()_+';

    const passResult = createPass(charList, passLen);
    setPass(passResult);
    setIsPassGenerated(true);
  };

  const createPass = (char: string, passLen:number) => {
    let result = '';
    for (let i = 0; i < passLen; i++) {
      const charIndex = Math.floor(Math.random() * char.length);
      result += char.charAt(charIndex);
    }
    return result;
  };

  const resetPass = () => {
    setPass('');
    setIsPassGenerated(false);
    setLowercase(true);
    setUppercase(false);
    setNumber(false);
    setSymbols(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps='handled' style={[styles.container, darkMode && styles.darkModeBackground]}>
      <SafeAreaView>
        <View>
          <Text style={[styles.heading, darkMode && styles.darkModeHeading]}>Password Generator</Text>
          <Formik
            initialValues={{ passlen: '' }}
            validationSchema={passschema}
            onSubmit={(values) => {
              generatePassString(+values.passlen);
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleReset,
              handleSubmit,
            }) => (
              <>
                <View style={styles.input1}>
                  <View>
                    <Text style={[styles.fieldtxt, darkMode && styles.darkModeText]}>Password length</Text>
                    {touched.passlen && errors.passlen && (
                      <Text style={styles.errmsg}>{errors.passlen}</Text>
                    )}
                  </View>
                  <TextInput
                    style={[styles.leninput, darkMode && styles.darkModeInput]}
                    value={values.passlen}
                    onChangeText={handleChange('passlen')}
                    placeholder="EX.8"
                    keyboardType='numeric'
                  />
                </View>

                <View style={styles.checkboxes}>
                  <Text style={[styles.fieldtxt, darkMode && styles.darkModeText]}>Include Lowercase</Text>
                  <BouncyCheckbox
                    isChecked={lowercase}
                    onPress={() => setLowercase(!lowercase)}
                    fillColor='red'
                  />
                </View>
                <View style={styles.checkboxes}>
                  <Text style={[styles.fieldtxt, darkMode && styles.darkModeText]}>Include Uppercase</Text>
                  <BouncyCheckbox
                    isChecked={uppercase}
                    onPress={() => setUppercase(!uppercase)}
                    fillColor='green'
                  />
                </View>
                <View style={styles.checkboxes}>
                  <Text style={[styles.fieldtxt, darkMode && styles.darkModeText]}>Include Numbers</Text>
                  <BouncyCheckbox
                    isChecked={number}
                    onPress={() => setNumber(!number)}
                    fillColor='blue'
                  />
                </View>
                <View style={styles.checkboxes}>
                  <Text style={[styles.fieldtxt, darkMode && styles.darkModeText]}>Include Symbols</Text>
                  <BouncyCheckbox
                    isChecked={symbols}
                    onPress={() => setSymbols(!symbols)}
                    fillColor='orange'
                  />
                </View>

                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    disabled={!isValid}
                    onPress={handleSubmit as unknown as () => void}
                    style={styles.buttons}
                  >
                    <Text style={styles.buttonText}>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => {
                      handleReset();
                      resetPass();
                    }}
                  >
                    <Text style={styles.buttonText}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {isPassGenerated && (
          <View style={[styles.card, styles.cardElevated, darkMode && styles.darkModeCard]}>
            <Text style={[styles.subTitle, darkMode && styles.darkModeText]}>Result:</Text>
            <Text style={[styles.description, darkMode && styles.darkModeText]}>Long Press to copy</Text>
            <Text selectable={true} style={[styles.generatedPassword, darkMode && styles.darkModeText]}>{pass}</Text>
          </View>
        )}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  darkModeBackground: {
    backgroundColor: '#333',
  },
  darkModeText: {
    color: 'white',
  },
  darkModeInput: {
    backgroundColor: '#555',
    color: 'white',
  },
  darkModeButton: {
    backgroundColor: '#444',
  },
  darkModeCard: {
    backgroundColor: '#555',
  },
  errmsg: {
    fontSize: 10,
    color: 'red',
  },
  heading: {
    fontSize: 25,
    color: 'cyan',
    paddingHorizontal: 20,
  },
  input1: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  leninput: {
    padding: 8,
    width: '30%',
    color:'black',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  checkboxes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  fieldtxt: {
    fontSize: 18,
  },
  buttons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    marginHorizontal: 20,
    marginVertical: 5,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000',
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  darkModeHeading:{
    color:'yellow'
  }

});

export default Idk;