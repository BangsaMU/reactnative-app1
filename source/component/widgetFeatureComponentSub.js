import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
 
const styles = StyleSheet.create({

  textStyle2: {
    marginTop: 5,
    fontSize: 17,
    color: '#383838'
  },
  FeatureImage: {
    height: 55,
    width: 55,
    marginTop: 15
  }


})

const SubWidget = (props) => {
  return (
      <TouchableOpacity onPress={props.onPress} style={{width:'25%', alignItems:'center'}}>
        <Image style={styles.FeatureImage} source={props.image} />
        <Text style={styles.textStyle2}>{props.title}</Text>
      </TouchableOpacity>
  );
}

export default SubWidget;