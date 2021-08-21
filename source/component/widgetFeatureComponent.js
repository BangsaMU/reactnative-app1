import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import SubFeature from './widgetFeatureComponentSub'

import imgFood from '../assets/icon/food.jpg'
import imgBike from '../assets/icon/bike.jpg'
import imgCar from '../assets/icon/car.jpg'
import imgSend from '../assets/icon/send.jpg'
import imgMore from '../assets/icon/more.jpg'

const styles = StyleSheet.create({
 
  wrapperFeature: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    flexWrap:'wrap',
    width:'100%'

  }

})

const Widget = () => {
  return (
    <View style={styles.wrapperFeature}>
      <SubFeature image={imgFood} title='Foods' />
      <SubFeature image={imgBike} title='Bike' />
      <SubFeature image={imgCar} title='Foods' />
      <SubFeature image={imgSend} title='Delive' />

      <SubFeature image={imgFood} title='Foods' />
      <SubFeature image={imgBike} title='Bike' />
      <SubFeature image={imgCar} title='Foods' />
      <SubFeature image={imgMore} title='More' />
    </View>
  );
}

export default Widget;