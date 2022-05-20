import {
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../navigation/Index';

const Index = () => {
  const [userText, setUserText] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const {setAuth}: any = useContext(AuthContext);

  const fieldsFull =
    userText.length > 0 && userPassword.length > 0 ? true : false;

  const navigation: any = useNavigation();
  return (
    <SafeAreaView>
      <View style={{height: '85%', justifyContent: 'center', padding: 40}}>
        <TextInput
          style={{borderBottomWidth: 1, marginVertical: 5}}
          placeholder="Usuario"
          onChange={e => setUserText(e.nativeEvent.text)}
        />
        <TextInput
          secureTextEntry
          style={{borderBottomWidth: 1, marginVertical: 5}}
          placeholder="Contraseña"
          onChangeText={e => setUserPassword(e)}
        />
        <TouchableOpacity
          onPress={() => {
            setAuth(true);
            navigation.navigate('Home');
          }}
          disabled={!fieldsFull}
          style={{
            backgroundColor: 'black',
            padding: 8,
            borderRadius: 5,
            width: '50%',
            alignItems: 'center',
            marginTop: 10,
            alignSelf: 'center',
          }}>
          <Text style={{color: 'white'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Index;
