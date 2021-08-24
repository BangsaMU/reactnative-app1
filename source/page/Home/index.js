import React from 'react';
import { Text, View, Image, Dimensions, StyleSheet, StatusBar, ScrollView } from 'react-native';
import imgBanner from '../../assets/images/awan.jpg'

import { cssCoreApp, cssStyles, cssHome as styles } from '../../style'

/*import component*/
import WidgetTiga from '../../component/widgetTigaComponent'
import WidgetFeature from '../../component/widgetFeatureComponent'
import WidgetPromoItem from '../../component/widgetPromoItemComponent'

const { heigh, width } = Dimensions.get('window')


const Home = () => {
  return (
    <ScrollView style={styles.pageHome}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="rgba(0,0,0,0)" />
      <Image style={styles.imageBanner} source={imgBanner} />
      <Text style={styles.greetingText}>Slamat Pagi Home route</Text>
      <View style={styles.wrapperOvo}>
        <View style={styles.textOvo}>
          <Text style={styles.textStyle1}>Ovo Balance</Text>
          <Text style={styles.textStyle1}>Rp 9.700.004</Text>
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

export default Home;