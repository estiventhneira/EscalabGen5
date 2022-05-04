import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Button from '../../components/Button';
import Product from '../../components/Product';

const Index = () => {
  const [data, setData] = useState([
    {name: 'Zapatos', id: 2355},
    {name: 'Camisas', id: 1},
    {name: 'Telefonos', id: 2334634653455},
  ]);
  return (
    <View>
      <Text>Index</Text>
      {data.map(item => {
        return <Product item={item} />;
      })}
      <Button screenName={'Details'} />
    </View>
  );
};

export default Index;
