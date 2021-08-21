import React from 'react';
import { Text, View, Image, Dimensions, StyleSheet, StatusBar, ScrollView } from 'react-native';

import Routes from './source/config/routes'

const { heigh, width } = Dimensions.get('window')


const Home = () => {
  return (
    <Routes/>

  );
}

const styles = StyleSheet.create({
  imageBanner: {
    height: 140, width: width,
  },
  greetingText: {
    fontSize: 17,
    fontWeight: 'bold',
    position: 'absolute',
    alignSelf: 'center',
    top: 30,
    color: '#383838'
  },
  wrapper: {
    marginHorizontal: 18,
  },
  wrapperOvo: {
    marginHorizontal: 18,
    height: 150,
    marginTop: -60,
    backgroundColor: 'white',
    elevation: 4
  },
  textOvo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    marginTop: 10,
  },
  textStyle1: {
    fontSize: 17,
    color: '#383838'
  },
  textStyle2: {
    alignSelf: 'center',
    marginTop: 5,
    fontSize: 17,
    color: '#383838'
  },
  garisDiOvo: {
    height: .8,
    backgroundColor: '#adadad',
    marginTop: 10
  },

  devider: {
    width: width,
    height: 15,
    backgroundColor: '#ededed',
    marginVertical: 15
  }

})

export default Home;