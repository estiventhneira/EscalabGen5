import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Button from '../../components/Button';
import Product from '../../components/Product';
import {useQuery} from '@apollo/client';
import {gql} from '@apollo/client';

const Index = () => {
  const EXCHANGE_RATES = gql`
    query me {
      me {
        id
        full_name
        payment_methods {
          last4
        }
      }
    }
  `;
  const [data, setData] = useState([
    {name: 'Zapatos', id: 2355},
    {name: 'Camisas', id: 1},
    {name: 'Telefonos', id: 2334634653455},
  ]);

  const {
    loading,
    error,
    data: dataaaaTommassoFuckYouOff,
  } = useQuery(EXCHANGE_RATES);

  console.log({dataaaaTommassoFuckYouOff, error, loading});

  return (
    <SafeAreaView>
      <Text>Index</Text>
      {data.map(item => {
        return <Product item={item} />;
      })}
      <Button screenName={'Details'} />
    </SafeAreaView>
  );
};

export default Index;
