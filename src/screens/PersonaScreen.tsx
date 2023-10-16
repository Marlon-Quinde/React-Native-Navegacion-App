import React, {useEffect, useContext} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../themes/appTheme';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RouteStackParams} from '../navigator/StackNavigator';
import {AuthContext} from '../context/AuthContext';

// interface RouterParams {
//   id: number;
//   nombre: string;
// }
interface Props
  extends NativeStackScreenProps<RouteStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({route, navigation}: Props) => {
  const params = route.params;
  const {changeName} = useContext(AuthContext);
  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  }, []);

  useEffect(() => {
    changeName(params.nombre);
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
