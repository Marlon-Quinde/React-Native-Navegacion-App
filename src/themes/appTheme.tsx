import {StyleSheet} from 'react-native';

export const colores = {
  primary: '#5856D6',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    color: 'black',
  },
  color: {
    color: 'black',
  },
  botonGrande: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    justifyContent: 'center',
    borderRadius: 20,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  botonGrandeTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  menuContainer: {
    marginVertical: 20,
    marginHorizontal: 50,
  },
  menuBoton: {
    marginVertical: 10,
  },
  menuTexto: {
    fontSize: 20,
  },
});
