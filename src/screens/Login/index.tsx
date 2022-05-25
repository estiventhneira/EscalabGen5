import {SafeAreaView, View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../navigation/Index';
import { Camera } from 'react-native-vision-camera';

const Index = () => {

  const [userText, setUserText] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const context = useContext(AuthContext);
  const navigation: any = useNavigation();

  const fieldsFull = userText.length>0 && userPassword.length>0 ? true : false;

  return (
    <SafeAreaView>
      <View style={{height: '85%', justifyContent: 'center', padding: 40}}>
        <TextInput 
          style={{borderBottomWidth: 1, marginVertical: 5}} 
          placeholder='Usuario' 
          onChangeText = { e => setUserText(e)}
        />
        <TextInput 
          secureTextEntry 
          style={{borderBottomWidth: 1, marginVertical: 5}} 
          placeholder='Contraseña' 
          onChange = { e => setUserPassword(e.nativeEvent.text)}
        />
        <TouchableOpacity 
          onPress={()=> navigation.navigate('Home')}
          disabled={!fieldsFull}
          style={{backgroundColor: 'black', padding: 5, borderRadius: 5, width: '50%', alignItems: 'center', marginTop: 10, alignSelf: 'center'}}>
          <Text style={{color: 'white'}}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={ async ()=> {
            const newCameraPermission = await Camera.requestCameraPermission()
const newMicrophonePermission = await Camera.requestMicrophonePermission()
            const cameraPermission = await Camera.getCameraPermissionStatus()
            const microphonePermission = await Camera.getMicrophonePermissionStatus()

            // console.log(cameraPermission, microphonePermission)
            navigation.navigate('Camera')}
          }
          // disabled={!fieldsFull}
          style={{backgroundColor: 'black', padding: 5, borderRadius: 5, width: '50%', alignItems: 'center', marginTop: 10, alignSelf: 'center'}}>
          <Text style={{color: 'white'}}>Subir Imagen</Text>
        </TouchableOpacity>
      </View>
      

    </SafeAreaView>
  );
};

export default Index;
