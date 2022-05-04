import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Button = ({screenName}) => {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
        style={styles.button}>
        <Text style={{color: 'gray'}}>Hola mundo</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#93FF33',
    padding: 15,
    borderRadius: 10,
    margin: 7,
    marginHorizontal: 35,
  },
});
export default Button;
