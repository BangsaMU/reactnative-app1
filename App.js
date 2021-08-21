import React from 'react';
import { Text, View, Image, Dimensions, StyleSheet, StatusBar, ScrollView } from 'react-native';
import imgBanner from './source/assets/images/awan.jpg'
/*import component*/
import WidgetTiga from './source/component/widgetTigaComponent.js'
import WidgetFeature from './source/component/widgetFeatureComponent'
import WidgetPromoItem from './source/component/widgetPromoItemComponent'

const { heigh, width } = Dimensions.get('window')


const Home = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="rgba(0,0,0,0)" />
      <Image style={styles.imageBanner} source={imgBanner} />
      <Text style={styles.greetingText}>Slamat Pagi Home route</Text>
      <View style={styles.wrapperOvo}>
        <View style={styles.textOvo}>
          <Text style={styles.textStyle1}>Ovo Balance</Text>
          <Text style={styles.textStyle1}>Rp 9.700.002</Text>
        </View>
        <View style={styles.garisDiOvo}></View>
        <WidgetTiga />
      </View>

      <View style={styles.wrapper}>
        <WidgetFeature />
      </View>

      <View style={styles.devider}></View>

      <View >
        <WidgetPromoItem/>
      </View>

    </ScrollView>

  );
}

const styles = StyleSheet.create({
  imageBanner: {
    height: 140, width: width,
  },
  greetingText: {
    fontSize: 17,
    fontWeight: 'bold',
    position: 'absolute',
    alignSelf: 'center',
    top: 30,
    color: '#383838'
  },
  wrapper: {
    marginHorizontal: 18,
  },
  wrapperOvo: {
    marginHorizontal: 18,
    height: 150,
    marginTop: -60,
    backgroundColor: 'white',
    elevation: 4
  },
  textOvo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    marginTop: 10,
  },
  textStyle1: {
    fontSize: 17,
    color: '#383838'
  },
  textStyle2: {
    alignSelf: 'center',
    marginTop: 5,
    fontSize: 17,
    color: '#383838'
  },
  garisDiOvo: {
    height: .8,
    backgroundColor: '#adadad',
    marginTop: 10
  },

  devider: {
    width: width,
    height: 15,
    backgroundColor: '#ededed',
    marginVertical: 15
  }

})

export default Home;