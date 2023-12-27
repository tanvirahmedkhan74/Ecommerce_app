import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, defaultStyle} from '../styles/styles';
import Header from '../components/Header';
import Heading from '../components/Heading';
import {Button, RadioButton} from 'react-native-paper';

const Payment = ({navigation, route}) => {
  const [paymentMethod, setPaymentMethod] = React.useState('COD');
  const [isAuth, setIsAuth] = React.useState(false);

  const redirectToLogin = () => {
    navigation.navigate('Login');
  };

  const codHandler = () => {};

  const onlineHandler = () => {};

  return (
    <View style={defaultStyle}>
      <Header back={true} />
      <Heading text1={'Payment'} text2={'Method'} style={{paddingTop: 70}} />

      <View style={styles.container}>
        <RadioButton.Group
          onValueChange={setPaymentMethod}
          value={paymentMethod}>
          <View style={styles.radioStyle}>
            <Text style={styles.radioText}>Cash on Delivery</Text>
            <RadioButton value="COD" color={colors.color1} />
          </View>

          <View style={styles.radioStyle}>
            <Text style={styles.radioText}>Online</Text>
            <RadioButton value="Online" color={colors.color1} />
          </View>
        </RadioButton.Group>
      </View>

      <TouchableOpacity
        onPress={
          !isAuth
            ? redirectToLogin
            : paymentMethod === 'COD'
            ? codHandler
            : onlineHandler
        }>
        <Button
          style={styles.btn}
          textColor={colors.color2}
          icon={
            paymentMethod === 'COD' ? 'check-circle' : 'circle-multiple-outline'
          }>
          {paymentMethod === 'COD' ? 'Place Order' : 'Pay Now'}
        </Button>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color3,
    padding: 30,
    borderRadius: 30,
    marginVertical: 30,
    flex: 1,
    justifyContent: 'center',
  },

  radioStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    alignItems: 'center',
  },

  radioText: {
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'uppercase',
    color: colors.color2,
  },

  btn: {
    borderRadius: 100,
    backgroundColor: colors.color3,
    padding: 10,
    margin: 10,
  },
});
export default Payment;
