import React, {createContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

export const CartContext = createContext({});
export const AuthContext = createContext({});

const Index = () => {
  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
  });

  const [cart, setCart] = useState([]);
  const [photo, setPhoto] = useState();
  const [auth, setAuth] = useState(false);

  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      <CartContext.Provider value={{cart, setCart, photo, setPhoto}}>
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
