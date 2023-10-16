import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from '../themes/appTheme';

interface Props extends NativeStackScreenProps<any, any> {}

export const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text>Pagina tres</Text>
      <Button title="Regresar" onPress={() => navigation.goBack()} />
      <Button title="Ir al home" onPress={() => navigation.popToTop()} />
    </View>
  );
};
