import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import noImg from '../assets/icon/nav-inbox.jpg' 
import imgRawon from '../assets/images/makanan/rawon_600x400.jpeg' 

import SubFeature from './widgetPromoComponentSub'

const styles = StyleSheet.create({

  textStyle2: {
    alignSelf: 'center',
    marginTop: 5,
    fontSize: 17,
    color: '#383838'
  },
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginHorizontal:18
  }


})

const Widget = () => {
  return (
    <View style={styles.wrapper}>
      <SubFeature image={imgRawon} title='Rawon' diskon='diskon 40%' validDate='Until 17 Mei'/>
      <SubFeature image={noImg} title='Bike' />
      <SubFeature image={noImg} title='Foods' />
      <SubFeature image={noImg} title='Delive' />

      <SubFeature image={noImg} title='Foods' />
      <SubFeature image={noImg} title='Bike' />
      <SubFeature image={noImg} title='Foods' />
      <SubFeature image={noImg} title='More' />
    </View>
  );
}

export default Widget;