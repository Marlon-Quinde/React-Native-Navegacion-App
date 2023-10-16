import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../themes/appTheme';
import {AuthContext} from '../context/AuthContext';

export const ChatScreen = () => {
  const {
    authState: {isLoggedIn},
    signIn,
  } = useContext(AuthContext);
  return (
    <View style={styles.globalMargin}>
      <Text style={{...styles.color, ...styles.title}}>ChatScreen</Text>
      {/* {!isLoggedIn ? <Button title="SignIn" onPress={signIn} /> : null} */}
      {!isLoggedIn && <Button title="SignIn" onPress={signIn} />}
    </View>
  );
};
