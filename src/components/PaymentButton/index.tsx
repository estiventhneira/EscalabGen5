import React, {useContext} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { AuthContext } from '../../navigation/Index'
import { useNavigation } from '@react-navigation/native'

const index = ({valor}) => {
    const {auth}: any = useContext(AuthContext);
    const navigation: any = useNavigation();
console.log(auth)
  return (
    <>
    {auth ? (
        <TouchableOpacity
            onPress={()=>{}}
            style={{
                backgroundColor: 'black',
                padding: 15,
                borderRadius: 10,
                margin: 7,
                marginHorizontal: 35
            }}
        >
            <Text style={{color: 'white', fontSize: 19}}>Pagar: ${valor}</Text>
        </TouchableOpacity>
    ) : (
        <TouchableOpacity
            onPress={()=>{
                navigation.navigate('Login');
            }}
            style={{
                backgroundColor: 'black',
                padding: 15,
                borderRadius: 10,
                margin: 7,
                marginHorizontal: 35
            }}
        >
            <Text style={{color: 'white', fontSize: 19}}>Inicia sesion</Text>
        </TouchableOpacity>
    )}
    </>
    
  )
}

export default index