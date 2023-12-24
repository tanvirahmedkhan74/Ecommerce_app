import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {colors} from '../styles/styles';
import {Button} from 'react-native-paper';

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
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigate.navigate('ProductDetails', {id})}>
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
          style={{
            width: '100%',
            height: 200,
            position: 'absolute',
            left: 50,
            top: 105,
          }}
        />

        <View
          style={{
            justifyContent: 'space-between',
            padding: 20,
            width: '100%',
          }}>
          <Text
            style={{
              color: idx % 2 === 0 ? colors.color2 : colors.color3,
              fontSize: 25,
              fontWeight: '300',
            }}
            numberOfLines={2}>
            {name}
          </Text>

          <Text
            style={{
              color: idx % 2 === 0 ? colors.color2 : colors.color3,
              fontSize: 20,
              fontWeight: '700',
              marginTop: 5,
            }}
            numberOfLines={2}>
            ${price}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: idx % 2 === 0 ? colors.color2 : colors.color3,
            width: '100%',
            borderRadius: 0,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}>
          <Button
            onPress={() => addToCardHandler(id, stock)}
            textColor={idx % 2 === 0 ? colors.color1 : colors.color2}>
            Add To Cart
          </Button>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
