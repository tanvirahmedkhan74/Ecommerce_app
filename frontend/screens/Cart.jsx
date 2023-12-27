import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {colors, defaultStyle} from '../styles/styles';
import Header from '../components/Header';
import Heading from '../components/Heading';
import {Button} from 'react-native-paper';
import CartItems from '../components/CartItems';
import {useNavigation} from '@react-navigation/native';

export const cartItems = [
  {
    name: 'Rx 300 XZX Typhoon',
    price: '565665',
    stock: 3,
    product: '2zx43',
    image:
      'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsX29mZmljZV8zNl9waG90b19vZl9sYWJ0b3BfaXNvbGF0ZWRfd2hpdGVfYmFja2dyb3VuZF9iYzUxZTI3MC0yZTY0LTQzMDgtYmFlMy1mMzA3NGY5ZTg2ZmUucG5n.png',
    quantity: 2,
  },

  {
    name: 'R2x 900 XZX Typhoon',
    price: '365665',
    stock: 9,
    product: '2zx45',
    image:
      'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsX29mZmljZV8zNl9waG90b19vZl9sYWJ0b3BfaXNvbGF0ZWRfd2hpdGVfYmFja2dyb3VuZF9iYzUxZTI3MC0yZTY0LTQzMDgtYmFlMy1mMzA3NGY5ZTg2ZmUucG5n.png',
    quantity: 3,
  },

  {
    name: 'R2x 900 XZX Typhoon',
    price: '365665',
    stock: 9,
    product: '2zxf5',
    image:
      'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsX29mZmljZV8zNl9waG90b19vZl9sYWJ0b3BfaXNvbGF0ZWRfd2hpdGVfYmFja2dyb3VuZF9iYzUxZTI3MC0yZTY0LTQzMDgtYmFlMy1mMzA3NGY5ZTg2ZmUucG5n.png',
    quantity: 3,
  },

  {
    name: 'R2x 900 XZX Typhoon',
    price: '365665',
    stock: 9,
    product: '2fx45',
    image:
      'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsX29mZmljZV8zNl9waG90b19vZl9sYWJ0b3BfaXNvbGF0ZWRfd2hpdGVfYmFja2dyb3VuZF9iYzUxZTI3MC0yZTY0LTQzMDgtYmFlMy1mMzA3NGY5ZTg2ZmUucG5n.png',
    quantity: 3,
  },

  {
    name: 'R2x 900 XZX Typhoon',
    price: '365665',
    stock: 9,
    product: '4z245',
    image:
      'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsX29mZmljZV8zNl9waG90b19vZl9sYWJ0b3BfaXNvbGF0ZWRfd2hpdGVfYmFja2dyb3VuZF9iYzUxZTI3MC0yZTY0LTQzMDgtYmFlMy1mMzA3NGY5ZTg2ZmUucG5n.png',
    quantity: 3,
  },

  {
    name: 'R2x 900 XZX Typhoon',
    price: '365665',
    stock: 9,
    product: '9uz245',
    image:
      'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsX29mZmljZV8zNl9waG90b19vZl9sYWJ0b3BfaXNvbGF0ZWRfd2hpdGVfYmFja2dyb3VuZF9iYzUxZTI3MC0yZTY0LTQzMDgtYmFlMy1mMzA3NGY5ZTg2ZmUucG5n.png',
    quantity: 3,
  },

  {
    name: 'R2x 900 XZX Typhoon',
    price: '365665',
    stock: 9,
    product: 'g3z245',
    image:
      'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsX29mZmljZV8zNl9waG90b19vZl9sYWJ0b3BfaXNvbGF0ZWRfd2hpdGVfYmFja2dyb3VuZF9iYzUxZTI3MC0yZTY0LTQzMDgtYmFlMy1mMzA3NGY5ZTg2ZmUucG5n.png',
    quantity: 3,
  },
];

const Cart = () => {
  const naviagation = useNavigation();

  const increamentHandler = (id, quantity, stock) => {
    console.log('Increased Quantity', id, quantity, stock);
  };

  const decreamentHandler = (id, quantity) => {
    console.log('Decreasing', id, quantity);
  };

  return (
    <View style={{...defaultStyle, padding: 0}}>
      <Header back={true} emptyCart={true} />

      {/* {Heading} */}
      <Heading
        text1="My Shopping"
        text2="Cart"
        style={{paddingTop: 100, marginLeft: 50}}
      />

      {/* Cart Items */}
      <View style={{paddingVertical: 20, flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartItems.map((item, index) => (
            <CartItems
              key={item.product}
              id={item.product}
              name={item.name}
              price={item.price}
              image={item.image}
              stock={item.stock}
              quantity={item.quantity}
              index={index}
              increamentHandler={increamentHandler}
              decreamentHandler={decreamentHandler}
            />
          ))}
        </ScrollView>
      </View>

      {/* Footer */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 35,
        }}>
        <Text>5 items</Text>
        <Text>$5670</Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={
          cartItems.length > 0
            ? () => naviagation.navigate('ConfirmOrder')
            : null
        }>
        <Button
          style={{
            backgroundColor: colors.color3,
            margin: 40,
            borderTopRightRadius: 100,
            borderBottomLeftRadius: 100,
            padding: 5,
          }}
          icon={'cart'}
          textColor={colors.color2}>
          Check Out
        </Button>
      </TouchableOpacity>
    </View>
  );
};
export default Cart;
