import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
 
  textStyle: {
    alignSelf: 'center',
    marginTop: 5,
    fontSize: 17,
    color: '#383838'
  }, 
  wrapper: {
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginHorizontal:18
  }, 


})

const Widget = () => {
  return (
    <View style={styles.wrapper}>
      <View>
        <Image style={styles.ovoFeatureImage} source={imgPay} />
        <Text style={styles.textStyle2}>Pay</Text>
      </View> 
    </View>
  );
}

export default Widget;