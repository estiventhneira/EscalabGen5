import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Dimensions,
  Text,
  ActivityIndicator,
} from 'react-native';
import CharacterItem from '../../components/CharacterItem';
import PaginationButtons from '../../components/PaginationButtons';
const axios = require('axios').default;

const Index = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    apiCall();
  }, [page]);

  const apiCall = () => {
    setLoading(true);
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(response => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
        setError(true);
      });
  };

  if (loading)
    return <ActivityIndicator size={'large'} style={{padding: 20}} />;

  if (error) return <Text>El servidor ha fallado</Text>;

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          {data?.map(item => {
            return <CharacterItem character={item} key={item?.id} />;
          })}
        </View>
        <PaginationButtons setPage={setPage} page={page} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
