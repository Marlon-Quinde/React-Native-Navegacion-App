import React, {useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from '../themes/appTheme';
import {useNavigation} from '@react-navigation/native';

export const Pagina2Screen = () => {
  const navigator = useNavigation();
  useEffect(() => {
    navigator.setOptions({
      title: 'Hola mundo',
      headerBackTitle: 'Atras',
    });
    return () => {};
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text>Pagina dos</Text>
      <Button
        title="Ir pagina 3"
        onPress={() => navigator.navigate<never>('Pagina3Screen' as never)}
      />
    </View>
  );
};
