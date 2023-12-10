import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {colors} from '../styles/styles';

const ProductCard = ({
  stock,
  name,
  price,
  id,
  image,
  addToCardHandler,
  idx,
  navigate,
}) => {
  return (
    <TouchableOpacity onPress={() => navigate.navigate('ProductDetails', {id})}>
      <View
        style={{
          width: 220,
          alignItems: 'center',
          justifyContent: 'space-between',
          elevation: 5,
          margin: 20,
          borderRadius: 25,
          height: 400,
          backgroundColor: idx % 2 === 0 ? colors.color1 : colors.color2,
        }}>
        <Image
          source={{uri: image}}
          resizeMode="contain"
          style={{width: '100%', height: 200, position: 'absolute', left: 50, top: 105}}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
