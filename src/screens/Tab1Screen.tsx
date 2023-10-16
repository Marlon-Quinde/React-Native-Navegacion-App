import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../themes/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TouchableIcon} from '../components/TouchableIcon';

export const Tab1Screen = () => {
  const {top: marginTop} = useSafeAreaInsets();
  useEffect(() => {
    console.log('TAB 1 SCREEN EFFECT');

    return () => {};
  }, []);

  return (
    <View style={{...styles.globalMargin, marginTop}}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="accessibility-outline" />
        <TouchableIcon iconName="american-football-outline" />
        <TouchableIcon iconName="barbell-outline" />
        <TouchableIcon iconName="battery-full-outline" />
      </Text>
    </View>
  );
};
