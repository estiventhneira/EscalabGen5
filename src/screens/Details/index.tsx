import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const Index = () => {
  const route = useRoute();

  console.log(route.params.item.id);

  return (
    <SafeAreaView>
      <Text>{route.params.item.name}</Text>
    </SafeAreaView>
  );
};

export default Index;
