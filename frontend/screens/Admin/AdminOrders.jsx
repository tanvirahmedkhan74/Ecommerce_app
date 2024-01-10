import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {colors, defaultStyle} from '../../styles/styles';
import Header from '../../components/Header';
import OrderItem from '../../components/OrderItem';
import {Headline} from 'react-native-paper';
import Loader from '../../components/Loader';
import {orders} from '../Orders';

const AdminOrders = () => {
  const loading = false;
  const processOrderLoading = false;

  const updateHandler = () => {
    console.log('update');
  };

  return (
    <View style={{...defaultStyle, backgroundColor: colors.color5}}>
      <Header back={true} />
      <View style={{marginBottom: 20, paddingTop: 70}}>
        <Text style={styles.loginText}>Admin Orders</Text>
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
                  admin={true}
                  updateHandler={updateHandler}
                  loading={processOrderLoading}
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

  container: {
    backgroundColor: colors.color3,
    alignItems: 'center',
    borderRadius: 20,
  },
});

export default AdminOrders;
