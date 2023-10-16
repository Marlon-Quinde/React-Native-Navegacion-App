import React, {useContext} from 'react';
import {Button} from 'react-native';
import {Text, View} from 'react-native';
import {AuthContext} from '../context/AuthContext';

export const AlbumScreen = () => {
  const {
    logout,
    authState: {isLoggedIn},
  } = useContext(AuthContext);
  return (
    <View>{isLoggedIn && <Button title="Logout" onPress={logout} />}</View>
  );
};
