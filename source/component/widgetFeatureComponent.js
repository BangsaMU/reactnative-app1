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
  { id: 2, img: require('../assets/icon/bike.jpg'), title: 'Bike', name: null },
  { id: 3, img: require('../assets/icon/food.jpg'), title: 'Foods', name: null },
  { id: 4, img: require('../assets/icon/send.jpg'), title: 'Delive', name: null },
  { id: 5, img: require('../assets/icon/food.jpg'), title: 'Foods', name: null },
  { id: 6, img: require('../assets/icon/bike.jpg'), title: 'Bike', name: null },
  { id: 7, img: require('../assets/icon/food.jpg'), title: 'Foods', name: null },
  { id: 8, img: require('../assets/icon/more.jpg'), title: 'More', name: null },
];

const Widget = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapperFeature}>
      {listFeature.map(feature => (
        <SubFeature key={feature.id.toString()} image={feature.img} title={feature.title} onPress={() => {
          if (feature.name) {
            console.log('goto', feature.name)
            navigation.navigate({
              name: feature.name,
              params: {},
            })
          } else {
            console.log(feature.title, 'error page 404')
            alert('Halaman masih dalam pengembangan')
          }
        }} />
      ))}
    </View>
  );
}

export default Widget;