import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';
import {colors} from '../styles/styles';
import {useNavigation, useRoute} from '@react-navigation/native';

export default function Header({back, emptyCart = false}) {
  const navigate = useNavigation();
  const route = useRoute();

  const emptyCartHandler = () => {
    console.log('Empty Cart Pressed');
  };

  return (
    <>
      {back && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            left: 20,
            top: 40,
            zIndex: 10,
          }}
          onPress={() => navigate.goBack()}>
          <Avatar.Icon
            icon={'arrow-left'}
            color={
              route.name === 'productDetails' ? colors.color2 : colors.color3
            }
            style={{backgroundColor: colors.color4}}
          />
        </TouchableOpacity>
      )}
      {/* Cart Icon */}

      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 20,
          top: 40,
          zIndex: 10,
        }}
        onPress={
          emptyCart ? emptyCartHandler : () => navigate.navigate('Cart')
        }>
        <Avatar.Icon
          icon={emptyCart ? 'delete' : 'cart'}
          color={
            route.name === 'ProductDetails' ? colors.color2 : colors.color3
          }
          style={{backgroundColor: colors.color4}}
        />
      </TouchableOpacity>
    </>
  );
}
