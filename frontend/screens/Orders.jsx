import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {colors, defaultStyle} from '../styles/styles';
import Header from '../components/Header';
import Loader from '../components/Loader';
import {Headline} from 'react-native-paper';
import OrderItem from '../components/OrderItem';

export const orders = [
  {
    _id: 'b56859',
    shippingInfo: {
      address: 'House No. 123, Street No. 123',
      city: 'Karachi',
      country: 'Pakistan',
      pinCode: '123456',
    },
    createdAt: '2021-05-12T12:00:00.000Z',
    orderStatus: 'Delivered',
    paymentMethod: 'COD',
    totalAmount: 56000,
  },

  {
    _id: 'a12345',
    shippingInfo: {
      address: 'Apartment 456, Main Street',
      city: 'New York',
      country: 'USA',
      pinCode: '10001',
    },
    createdAt: '2021-08-20T15:30:00.000Z',
    orderStatus: 'Processing',
    paymentMethod: 'Online',
    totalAmount: 75000,
  },

  {
    _id: 'b67890',
    shippingInfo: {
      address: 'Unit 789, Elm Avenue',
      city: 'Los Angeles',
      country: 'USA',
      pinCode: '90001',
    },
    createdAt: '2021-09-05T10:45:00.000Z',
    orderStatus: 'Shipped',
    paymentMethod: 'Online',
    totalAmount: 42000,
  },

  {
    _id: 'c54321',
    shippingInfo: {
      address: 'Flat 321, Maple Street',
      city: 'London',
      country: 'United Kingdom',
      pinCode: 'SW1A 1AA',
    },
    createdAt: '2021-11-10T18:20:00.000Z',
    orderStatus: 'Delivered',
    paymentMethod: 'COD',
    totalAmount: 98000,
  },
];

const Orders = () => {
  const loading = false;
  return (
    <View style={{...defaultStyle, backgroundColor: colors.color5}}>
      <Header back={true} />
      <View style={{marginBottom: 20, paddingTop: 70}}>
        <Text style={styles.loginText}>Order List</Text>
      </View>

      {loading ? (
        <Loader />
      ) : (
        <View style={{flex: 1, padding: 10}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {orders.length > 0 ? (
              orders.map((item, index) => (
                <OrderItem
                  id={item._id}
                  shippingInfo={`${item.shippingInfo.address}, ${item.shippingInfo.city}, ${item.shippingInfo.country}, ${item.shippingInfo.pinCode}`}
                  price={item.totalAmount}
                  status={item.orderStatus}
                  paymentMethod={item.paymentMethod}
                  createdAt={item.createdAt.split('T')[0]}
                  key={item._id}
                  idx={index}
                />
              ))
            ) : (
              <Headline style={{textAlign: 'center'}}>No Orders Yet</Headline>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loginText: {
    fontWeight: '700',
    fontSize: 26,
    textAlign: 'center',
    backgroundColor: colors.color3,
    color: colors.color2,
    padding: 5,
    borderRadius: 10,
  },
});

export default Orders;
