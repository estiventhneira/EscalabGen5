import {View, Text} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const Index = () => {
  const route = useRoute();

  console.log(route.params.item.id);

  return (
    <View>
      <Text>{route.params.item.name}</Text>
    </View>
  );
};

export default Index;
