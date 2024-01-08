import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../styles/styles';
import {Avatar} from 'react-native-paper';

const ButtonBox = ({icon, text, handler, reverse = false, loading = false}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: reverse ? colors.color1 : colors.color3,
        borderRadius: 20,
        alignItems: 'center',
        height: 90,
        width: 90,
        marginTop: 10
      }}
      onPress={() => handler(text)}
      disabled={loading}>
      <Avatar.Icon
        size={50}
        color={colors.color2}
        style={{backgroundColor: reverse ? colors.color1 : colors.color3}}
        icon={icon}
      />

      <Text style={{color: colors.color2}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonBox;
