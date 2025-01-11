import { StyleSheet, Text, View, Linking, TouchableOpacity, Image } from 'react-native';
import React from 'react';

interface BlogCardProps {
  darkMode: boolean;
}

export default function BlogCard({ darkMode }: BlogCardProps) {
  function url(websitelink: string) {
    Linking.openURL(websitelink);
  }
  return (
    <View style={[darkMode && styles.darkModeBackground]}>
      <Text style={[styles.heading, darkMode && styles.darkModeText]}>BlogCard</Text>
      <View style={[styles.card, darkMode && styles.cardDarkMode]}>
        <Text style={[styles.header, darkMode && styles.headerDarkMode]}>REACT NATIVE</Text>
        <Image 
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoRuyBgp5ERWdVHdsV9BsA3xbHByp8yTiGcQ&s',
          }}
          style={[styles.image, darkMode && styles.imageDarkMode]}
        />
        <Text numberOfLines={2} style={[styles.body, darkMode && styles.bodyDarkMode]}>
          This is a blog post about React Native. React Native is a framework for building native mobile apps, I personally prefer react-native over flutter, although flutter is good, but i have good 
          understanding of javascript concepts, so i dont have to learn a whole new language like dart.
        </Text>
        <View style={[styles.footer, darkMode && styles.footerDarkMode]}>
          <TouchableOpacity onPress={() => url('https://reactnative.dev')} >
            <Text style={[styles.link, darkMode && styles.linkDarkMode]}>Website</Text>
          </TouchableOpacity> 
          <TouchableOpacity onPress={() => url('https://github.com/facebook/react-native')}>
            <Text style={[styles.link, darkMode && styles.linkDarkMode]}>Github</Text>
          </TouchableOpacity>
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
  card: {
    flex: 1,
    justifyContent: 'center',
    height: 360,
    backgroundColor: 'pink',
    padding: 20,
    margin: 20,
    borderRadius: 10,

    elevation: 20,
    shadowOffset: {
        height:  10,
        width: 10
    },
    shadowColor: '#000',
    shadowOpacity: 0.8,
  },
  header: {
    marginBottom: 5,
    fontSize:  18,
    marginHorizontal:  90,
    fontWeight:  'bold',

  },
  image: {
    height: 200,
    borderRadius: 10,
  },
  body: {
    marginVertical: 10,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 15,
    backgroundColor: 'black',
    height: 30,
    borderRadius: 10,
    maxWidth: '100%'
  },
  link: {
    color: 'white',
    marginVertical: 5,
    fontWeight:  'bold',
  },
  darkModeBackground: {
    backgroundColor: '#333',
  },
  darkModeText: {
    color: 'yellow', 
  },
  cardDarkMode: {
    backgroundColor: 'pink', 
  },
  headerDarkMode: {
    color: 'gray', 
  },
  imageDarkMode: {
    //tintColor: 'white', 
  },
  bodyDarkMode: {
    color: 'black', 
  },
  footerDarkMode: {
    backgroundColor: 'red', 
  },
  linkDarkMode: {
    color: 'white',
  }
});