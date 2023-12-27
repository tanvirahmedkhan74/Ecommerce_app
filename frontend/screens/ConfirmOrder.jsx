import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors, defaultStyle} from '../styles/styles';
import Header from '../components/Header';
import Heading from '../components/Heading';
import {cartItems} from './Cart';
import ConfirmOrderItem from '../components/ConfirmOrderItem';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-paper';

export default function ConfirmOrder() {
  const navigation = useNavigation();
  const itemsPrice = 4500;
  const shippingPrice = 500;
  const tax = 0.18;

  const totalAmount = itemsPrice + shippingPrice + tax * itemsPrice;
  return (
    <View style={defaultStyle}>
      <Header back={true} />
      <Heading style={{paddingTop: 70}} text1="Confirm" text2="Order" />
      <View style={styles.container}>
        <ScrollView>
          {cartItems.map(item => (
            <ConfirmOrderItem
              key={item.product}
              price={item.price}
              image={item.image}
              qty={item.quantity}
              name={item.name}
            />
          ))}
        </ScrollView>
      </View>
      <PriceTag heading="SubTotal" value={itemsPrice} />
      <PriceTag heading="Shipping Charges" value={shippingPrice} />
      <PriceTag heading="Tax" value={tax} />
      <PriceTag heading="Total" value={totalAmount} />

      <TouchableOpacity
        onPress={() =>
          navigation.navigate(
            'Payment',
            itemsPrice,
            shippingPrice,
            tax,
            totalAmount,
          )
        }>
        <Button
          style={styles.button}
          textColor={colors.color2}
          icon={'credit-card'}>
          Payment
        </Button>
      </TouchableOpacity>
    </View>
  );
}

const PriceTag = ({heading, value}) => (
  <View style={styles.priceTag}>
    <Text style={{fontWeight: '800'}}>{heading}</Text>
    <Text style={{fontWeight: '800'}}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },

  priceTag: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },

  button: {
    borderRadius: 100,
    marginVertical: 10,
    padding: 10,
    backgroundColor: colors.color3,
  },
});
