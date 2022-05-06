import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Product = ({item}) => {
  const navigation: any = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Details', {
          item,
        });
      }}
      style={{padding: 20, backgroundColor: 'gray', margin: 10}}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default Product;
