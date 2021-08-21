import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, ProgressViewIOSComponent } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

const { heigh, width } = Dimensions.get('window')
const styles = StyleSheet.create({

  textStyle1: {
    marginLeft: 10,
    marginVertical: 10,
  },
  textStyle2: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#383838',
  },
  textStyle3: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'green',
  },
  textStyle4: {
    fontSize: 16,
    color: '#575757',
    paddingLeft: 10,
    paddingBottom: 4,
  },
  FeatureImage: {
    height: width / 2 - 27,
    width: width / 2 - 27,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  wrapper: {
    backgroundColor: 'white',
    elevation: 4,
    borderRadius: 8,
    width: width / 2 - 27,
    marginRight: 18,
    marginBottom: 18,
  },
  wrapper2: {
    position: 'absolute',
    top: 10,
    backgroundColor: 'white',
    padding: 4,
    borderTopRightRadius: 10,
  },
  wrapper3: {
    marginLeft: 10,
    marginBottom: 8,
    flexDirection: 'row'
  },
  icon1: {

  }

})

const SubWidget = (props) => {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.FeatureImage} source={props.image} />
      <View style={styles.textStyle1}>
        <Text style={styles.textStyle2}>{props.title}</Text>
      </View>
      {
        props.diskon ? <View style={styles.wrapper2}><Text style={styles.textStyle3}>{props.diskon}</Text></View> : <View></View>
      }
      <View style={styles.wrapper3}>
        <Icons name="ios-calendar" size={16} color="#575757" />
        {props.validDate ? <Text style={styles.textStyle4}>{props.validDate}</Text>:<Text style={styles.textStyle4}>-</Text>}
      </View>
    </View>
  );
}

export default SubWidget;