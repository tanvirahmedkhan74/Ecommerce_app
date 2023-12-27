import {View, Text, Image} from 'react-native';
import React from 'react';

export default function ConfirmOrderItem({name, price, qty, image}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 12,
      }}>
      <Image
        source={{uri: image}}
        style={{width: 70, height: 70}}
        resizeMode="contain"
      />

      <Text numberOfLines={1}>{name}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontWeight: 'bold'}}>${price}</Text>
        <Text style={{marginHorizontal: 8}}> x </Text>
        <Text>{qty}</Text>
      </View>
    </View>
  );
}
