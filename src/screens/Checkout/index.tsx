import React, {useState, useContext} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import CharacterItem from '../../components/CharacterItem';
import { CartContext } from '../../navigation/Index';
import PaymentButton from '../../components/PaymentButton';
import Button from '../../components/Button';

const Index = () => {
  const {cart, setCart}: any = useContext(CartContext);

  const valor = 5; //USD
  const total = cart.length * valor;
  console.log("TOTAAAL", total)

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
        width: '100%',
      }}>
      {cart.map((item, index) => {
        console.log(item, index);

        return (
          <View key={item?.id}>
            <TouchableOpacity
              onPress={() => {
                const newArray = cart.filter(characterI => characterI.id != item.id);
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

      {cart.length > 0 ? <PaymentButton valor={total}/> : (
        <View style={{ marginTop: 200 }}>
          <Button text={'Regresar a la página de compra'} screenName={'Home'}/>
        </View>
      )}
    </ScrollView>
  );
};

export default Index;
