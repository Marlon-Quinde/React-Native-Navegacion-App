import React, {useContext} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {colores, styles} from '../themes/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AuthContext} from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();

  const {authState} = useContext(AuthContext);

  return (
    <View style={{...styles.globalMargin, marginTop: insets.top + 20}}>
      {/* <Text style={styles.color}>SettingsScreen</Text> */}
      <Text style={styles.color}>{JSON.stringify(authState, null, 2)} </Text>
      {authState.favoriteIcon && (
        <Icon name={authState.favoriteIcon} size={80} color={colores.primary} />
      )}
    </View>
  );
};
