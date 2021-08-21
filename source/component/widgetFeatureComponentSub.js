import React from 'react';
import { Text, View, Image, StyleSheet, ProgressViewIOSComponent } from 'react-native';
 
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
      <View style={{width:'25%', alignItems:'center'}}>
        <Image style={styles.FeatureImage} source={props.image} />
        <Text style={styles.textStyle2}>{props.title}</Text>
      </View>
  );
}

export default SubWidget;