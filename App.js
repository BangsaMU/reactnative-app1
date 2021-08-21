import React from 'react';
import { Text, View, Image, Dimensions, StyleSheet, StatusBar, ScrollView } from 'react-native';

import Routes from './source/config/routes'

const { heigh, width } = Dimensions.get('window')


const Home = () => {
  return (
    <Routes/>

  );
}


export default Home;