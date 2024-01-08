import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../styles/styles';
import { Button } from 'react-native-paper';

const OrderItem = ({
  id,
  price,
  shippingInfo,
  createdAt,
  status,
  paymentMethod,
  updateHandler,
  admin = false,
  loading=false,
  idx = 0,
}) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: idx % 2 === 0 ? colors.color2 : colors.color3,
      }}>
      <Text
        style={{
          ...styles.text,
          backgroundColor: idx % 2 === 0 ? colors.color1 : colors.color3,
        }}>
        ID - #{id}
      </Text>

      <TextBox title={'Address'} value={shippingInfo} i={idx} />
      <TextBox title={'Price'} value={price} i={idx} />
      <TextBox title={'Payment Method'} value={paymentMethod} i={idx} />
      <TextBox title={'Status'} value={status} i={idx} />
      <TextBox title={'Date'} value={createdAt} i={idx} />

      {
        admin && (
            <Button
                mode='outlined'
                icon="update"
                textColor={idx % 2 === 0 ? colors.color3 : colors.color2}
                style={{width: 120, alignSelf: 'center'}}
                onPress={() => updateHandler(id)}
                loading={loading}
                disabled={loading}
                >
                Update
            </Button>
        )
      }
    </View>
  );
};

const TextBox = ({title, value, i}) => (
  <Text
    style={{
      marginVertical: 6,
      color: i % 2 === 0 ? colors.color3 : colors.color2,
      fontWeight: '500'
    }}>
    <Text style={{fontWeight: '900'}}>{title} - </Text>
    {title === 'Price' ? '$' : '' }{value}
  </Text>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    elevation: 7,
    borderRadius: 10,
    marginVertical: 20,
  },

  text: {
    color: colors.color2,
    fontWeight: '700',
    fontSize: 16,
    marginHorizontal: -10,
    marginTop: -20,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});

export default OrderItem;
