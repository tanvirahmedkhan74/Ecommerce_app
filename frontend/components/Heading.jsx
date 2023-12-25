import {View, Text} from 'react-native';
import React from 'react';

const Heading = ({text1, text2, style}) => {
  return (
    <View style={style}>
      <Text style={{fontSize: 26}}>{text1}</Text>
      <Text style={{fontSize: 30, fontWeight: '600'}}>{text2}</Text>
    </View>
  );
};

export default Heading;
