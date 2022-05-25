import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useCameraDevices, Camera} from 'react-native-vision-camera';

const Index = () => {
  const devices = useCameraDevices();
  console.log('====================================');
  console.log();
  console.log('====================================');
  const device = devices.front;

  if (device == null) return <Text>Loading</Text>;
  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
};

export default Index;
