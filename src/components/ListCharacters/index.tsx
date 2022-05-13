import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useQuery} from '@apollo/client';
import CharacterItem from '../CharacterItem';
import {CHARACTER_QUERY} from './querys';

const Index = ({page}) => {
  const {data, loading, error} = useQuery(CHARACTER_QUERY, {
    variables: {page: page},
  });

  if (loading)
    return <ActivityIndicator size={'large'} style={{padding: 20}} />;

  if (error) return <Text>El servidor ha fallado</Text>;

  const parseData = data?.characters?.results ? data?.characters?.results : [];

  return (
    <View style={{alignItems: 'center'}}>
      {parseData.map(item => {
        return <CharacterItem character={item} key={item?.id} />;
      })}
    </View>
  );
};

export default Index;
