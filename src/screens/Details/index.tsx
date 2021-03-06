import {View, Text, SafeAreaView, Image} from 'react-native';
import React, {useState, useContext} from 'react';
import {useRoute} from '@react-navigation/native';
import AddOrDeleteButtons from '../../components/AddOrDeleteButton';
import {CartContext} from '../../navigation/Index';

const Index = () => {
  const route: any = useRoute();
  const character = route?.params?.character;

  const {cart, setCart}: any = useContext(CartContext);

  return (
    <SafeAreaView>
      <View style={{alignItems: 'center', padding: 20}}>
        <Image
          source={{uri: character.image}}
          style={{height: 300, width: 300, borderRadius: 10}}
        />
        <Text style={{marginTop: 8, fontSize: 20, fontWeight: '800'}}>
          {character.name}
        </Text>
        <Text style={{marginTop: 2, fontSize: 15, fontWeight: '500'}}>
          Gender: {character.gender}
        </Text>
        <Text style={{marginTop: 2, fontSize: 15, fontWeight: '500'}}>
          Type: {character.type}
        </Text>

        {character.status == 'Alive' ? (
          <Text
            style={{
              marginTop: 2,
              fontSize: 15,
              fontWeight: '500',
              color: 'green',
            }}>
            Status: {character.status}
          </Text>
        ) : (
          <Text style={{marginTop: 2, fontSize: 15, fontWeight: '500'}}>
            Status: {character.status}
          </Text>
        )}
        <Text style={{marginTop: 2, fontSize: 15, fontWeight: '500'}}>
          Location: {character?.location.name}
        </Text>
      </View>
      <AddOrDeleteButtons setCart={setCart} cart={cart} character={character} />
    </SafeAreaView>
  );
};

export default Index;
