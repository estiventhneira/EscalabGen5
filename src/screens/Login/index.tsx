import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Button from '../../components/Button';

const Index = () => {
  return (
    <SafeAreaView>
      <Text>Index</Text>
      <Button screenName={'Details'} />
    </SafeAreaView>
  );
};

export default Index;
