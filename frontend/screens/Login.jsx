import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import {colors, defaultStyle, inputStyle} from '../styles/styles';
import {Button, TextInput} from 'react-native-paper';
import Footer from '../components/Footer';

const inputOptions = {
  style: inputStyle,
  mode: 'outlined',
  color: colors.color1,
};

const Login = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const loading = true;

  const submitHandler = () => {
    Alert.alert('Logged In');
  };
  return (
    <>
      <View style={defaultStyle}>
        {/* Heading */}
        <View style={{marginBottom: 20}}>
          <Text style={styles.loginText}>Login</Text>
        </View>

        <View style={styles.loginContainer}>
          <TextInput
            {...inputOptions}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <TextInput
            {...inputOptions}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('ForgetPassword')}>
            <Text style={styles.forgetPass}>Forgot Password ?</Text>
          </TouchableOpacity>

          <Button
            loading={loading}
            textColor={colors.color2}
            disabled={email === '' || password === ''}
            style={styles.btn}
            onPress={submitHandler}>
            Log In
          </Button>

          <Text style={styles.orText}>OR</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.link}>Create an Account</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer activeRoute='Profile'/>
    </>
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

  loginContainer: {
    flex: 1,
    backgroundColor: colors.color3,
    padding: 20,
    justifyContent: 'center',
    elevation: 10,
    borderRadius: 20,
  },

  forgetPass: {
    color: colors.color2,
    marginVertical: 10,
    marginHorizontal: 20,
    fontSize: 16,
    fontWeight: '200',
    alignSelf: 'flex-end',
  },

  btn: {
    backgroundColor: colors.color1,
    margin: 20,
    padding: 5,
  },

  orText: {
    alignSelf: 'center',
    color: colors.color2,
    fontWeight: '700',
    fontSize: 20,
  },

  link: {
    alignSelf: 'center',
    marginVertical: 20,
    marginHorizontal: 20,
    fontSize: 16,
    textTransform: 'uppercase',
    color: colors.color2,
    backgroundColor: colors.color1,
    padding: 10,
    borderRadius: 30,
    paddingHorizontal: 25,
  },
});

export default Login;
