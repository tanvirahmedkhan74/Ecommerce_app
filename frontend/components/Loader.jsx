import {View, Text} from 'react-native';
import React from 'react';
import {ActivityIndicator} from 'react-native-paper';

const Loader = () => {
  return (
    <ActivityIndicator
      size={80}
      style={{top: '50%', alignSelf: 'center', position: 'absolute'}}
    />
  );
};

export default Loader;
