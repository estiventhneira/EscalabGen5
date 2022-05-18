import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import PaginationButtons from '../../components/PaginationButtons';
import ListCharacters from '../../components/ListCharacters';
import Button from '../../components/Button';

const Index = () => {
  const [page, setPage] = useState(1);

  console.log(page);

  return (
    <SafeAreaView>
      <ScrollView>
        <ListCharacters page={page} />
        <PaginationButtons setPage={setPage} page={page} />
        <Button screenName={'Checkout'} text={'Ir a checkout'} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
