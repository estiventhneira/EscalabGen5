import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'
import { Camera, useCameraDevices } from 'react-native-vision-camera'




const Cameras =  () => {
    const camera = useRef<Camera>(null)
    const devices = useCameraDevices()
    const device = devices.front
    // console.log(device)

    const doPhoto = async() => {
        const photo = await camera.current.takeSnapshot({})
        console.log(photo)
    }
    

  if (device == null) return <View><Text>Loading...</Text></View>
  return (
      <>
    <Camera
      ref = {camera}
      photo = {true}
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
    />

    <TouchableOpacity onPress={doPhoto}>
        <Text>Take a photo!</Text>
    </TouchableOpacity>
    </>

  )
}

export default Cameras