import React from 'react';
import { View, StyleSheet } from 'react-native';
import SubFeature from './widgetFeatureComponentSub'
import { useNavigation } from '@react-navigation/native'

// import imgFood from '../assets/icon/food.jpg'
// import imgBike from '../assets/icon/bike.jpg'
// import imgCar from '../assets/icon/car.jpg'
// import imgSend from '../assets/icon/send.jpg'
// import imgMore from '../assets/icon/more.jpg'


const styles = StyleSheet.create({

  wrapperFeature: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    flexWrap: 'wrap',
    width: '100%'

  }

})

const listFeature = [
  { id: 1, img: require('../assets/icon/food.jpg'), title: 'Foods', name: 'Food' },
  { id: 1, img: require('../assets/icon/bike.jpg'), title: 'Bike', name: '' },
  { id: 1, img: require('../assets/icon/food.jpg'), title: 'Foods', name: '' },
  { id: 1, img: require('../assets/icon/send.jpg'), title: 'Delive', name: '' },
  { id: 1, img: require('../assets/icon/food.jpg'), title: 'Foods', name: '' },
  { id: 1, img: require('../assets/icon/bike.jpg'), title: 'Bike', name: '' },
  { id: 1, img: require('../assets/icon/food.jpg'), title: 'Foods', name: '' },
  { id: 1, img: require('../assets/icon/more.jpg'), title: 'More', name: '' },
];

const Widget = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapperFeature}>
      {listFeature.map(feature => (
        <SubFeature image={feature.img} title={feature.title} onPress={() => {
          if (feature.name) {
            navigation.navigate({
              name: feature.name,
              params: {},
            })
          }else{
            alert('Halaman masih dalam pengembangan')
          }
        }} />
      ))}
    </View>
  );
}

export default Widget;