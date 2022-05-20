import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const AddOrDeleteButtons = ({setCart, cart, character}) => {
  const areIn = cart.find(characterI => characterI.id == character.id);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 20,
      }}>
      {areIn ? (
        <TouchableOpacity
          onPress={() => {
            const newArray = cart.filter(
              characterI => characterI.id != character.id,
            );
            setCart(newArray);
          }}
          style={{
            paddingHorizontal: 15,
            paddingVertical: 10,
            backgroundColor: '#dc2626',
            borderRadius: 5,
          }}>
          <Text style={{color: 'white', fontSize: 18}}>Delete Item</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            if (character) setCart([...cart, character]);
          }}
          style={{
            paddingHorizontal: 22,
            paddingVertical: 10,
            backgroundColor: '#16a34a',
            borderRadius: 5,
          }}>
          <Text style={{color: 'white', fontSize: 18}}>Buy Item</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AddOrDeleteButtons;
