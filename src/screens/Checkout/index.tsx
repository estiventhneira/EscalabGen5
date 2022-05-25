import React, {useState, useContext} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import CharacterItem from '../../components/CharacterItem';
import {CartContext} from '../../navigation/Index';
import PaymentButton from '../../components/PaymentButton';
import Button from '../../components/Button';

const Index = () => {
  const {cart, setCart, photo, setPhoto}: any = useContext(CartContext);

  console.log(photo, 'desde checkout');

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
        width: '100%',
      }}>
      {true ? (
        <Image
          source={{uri: `file://, ${photo.path}`}}
          style={{height: 150, width: 150}}
        />
      ) : null}
      {cart.map((item, index) => {
        return (
          <View key={item?.id}>
            <TouchableOpacity
              onPress={() => {
                const newArray = cart.filter(characterI => characterI != item);
                setCart(newArray);
              }}
              style={{
                backgroundColor: 'black',
                width: 30,
                position: 'absolute',
                zIndex: 1,
                top: 20,
                right: 0,
                borderTopRightRadius: 5,
              }}>
              <Text style={{color: 'white', fontSize: 25, textAlign: 'center'}}>
                X
              </Text>
            </TouchableOpacity>
            <CharacterItem character={item} />
          </View>
        );
      })}

      {cart.length > 0 ? (
        <PaymentButton />
      ) : (
        <View style={{marginTop: 200}}>
          <Button text={'Regresar a la pagina de compra'} screenName={'Home'} />
        </View>
      )}
    </ScrollView>
  );
};

export default Index;
