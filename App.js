import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import Login from './src/screens/Login';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
const Stack = createNativeStackNavigator();

export default function App() {
  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
  });

  /* const httpLink = createHttpLink({
    uri: 'https://api.eventful.getpolygraph.com/graphql',
    //uri: `https://tgirotto-yebosoftware-panama-4jjxxvg9h7x5-3000.githubpreview.dev/graphql`,
  });

  const authLink = setContext((_, {headers}) => {
    // get the authentication token from local storage if it exists
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRvbW1hc28uZ2lyb3R0bzkxQGdtYWlsLmNvbSIsInN1YiI6MjcsImlhdCI6MTY1MTcxMzkwMSwiZXhwIjoxNjUxNzE3NTAxfQ.ShCKsqFLwmPuScax9jCTRZNjr7oPfbX_QfHHX85Slc0';
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const clienttt = new ApolloClient({
    uri: 'https://api.eventful.getpolygraph.com/graphql',
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({}),
    // defaultOptions: defaultOptions,
  }); */
  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={Home}
          />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </ApolloProvider>
    </NavigationContainer>
  );
}
