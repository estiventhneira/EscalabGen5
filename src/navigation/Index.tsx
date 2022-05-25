import React, { createContext, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import { Camera } from 'react-native-vision-camera';

export const CartContext = createContext({});
export const AuthContext = createContext({});



const Index = () => {
  const [cart, setCart] = useState([]);
  const [auth, setAuth] = useState(true);


  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <AuthContext.Provider value = {{auth, setAuth}}>
      <CartContext.Provider value={{cart, setCart}}>
        <ApolloProvider client={client}>
         <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </CartContext.Provider>
  </AuthContext.Provider>
  );
};

export default Index;
