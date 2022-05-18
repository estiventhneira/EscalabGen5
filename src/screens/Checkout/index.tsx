import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import CharacterItem from '../../components/CharacterItem';

const Index = () => {
  const [cart, setCart] = useState([
    {
      id: 3,
      gender: 'Male',
      type: 'Human',
      status: 'Alive',
      image:
        'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/01_%C2%BFQu%C3%A9-puedo-hacer-si-mi-gato-est%C3%A1-triste-.png?itok=w67Nhubc',
    },
    {
      id: 2,
      gender: 'Male',
      type: 'Human',
      status: 'Alive',
      image:
        'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/01_%C2%BFQu%C3%A9-puedo-hacer-si-mi-gato-est%C3%A1-triste-.png?itok=w67Nhubc',
    },
  ]);

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
    </ScrollView>
  );
};

export default Index;
