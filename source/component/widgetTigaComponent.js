import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import imgPay from '../assets/icon/pay.jpg'
import imgTopup from '../assets/icon/topup.jpg'
import imgReward from '../assets/icon/reward.jpg'
 
const styles = StyleSheet.create({
 
  textStyle2: {
    alignSelf: 'center',
    marginTop: 5,
    fontSize: 17,
    color: '#383838'
  }, 
  wrapperPay: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  ovoFeatureImage: {
    height: 45,
    width: 45,
    marginTop: 25,
    marginHorizontal: 40
  }


})

const Widget = () => {
  return (
    <View style={styles.wrapperPay}>
      <View>
        <Image style={styles.ovoFeatureImage} source={imgPay} />
        <Text style={styles.textStyle2}>Pay</Text>
      </View>
      <View>
        <Image style={styles.ovoFeatureImage} source={imgTopup} />
        <Text style={styles.textStyle2}>Pay</Text>
      </View>
      <View>
        <Image style={styles.ovoFeatureImage} source={imgReward} />
        <Text style={styles.textStyle2}>Pay</Text>
      </View>
    </View>
  );
}

export default Widget;