import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  colors,
  defaultHumanUrl,
  defaultStyle,
  inputStyle,
} from '../styles/styles';
import {Avatar, Button, TextInput} from 'react-native-paper';
import Footer from '../components/Footer';

const inputOptions = {
  style: inputStyle,
  mode: 'outlined',
  color: colors.color1,
};

const SignUp = ({navigation, route}) => {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [city, setCity] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [pinCode, setPinCode] = React.useState('');
  const [avatar, setAvatar] = React.useState('');

  const loading = false;
  const disableBtn =
    !name || !email || !password || !country || !city || !address || !pinCode;

  const submitHandler = () => {
    Alert.alert('Logged In');
    navigation.navigate('Verify');
  };

  React.useEffect(() => {
    // console.log(route.params);
    if (route.params) {
      if (route.params?.photo) {
        setAvatar(route.params.photo);
      }
    }
  }, [route.params]);

  return (
    <>
      <View style={defaultStyle}>
        {/* Heading */}
        <View style={{marginBottom: 20}}>
          <Text style={styles.loginText}>Create New Account</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            padding: 20,
            marginBottom: 10,
            elevation: 15,
            borderRadius: 10,
            backgroundColor: colors.color3,
          }}>
          <View style={{minHeight: 900}}>
            <Avatar.Image
              style={{alignSelf: 'center', backgroundColor: 'red'}}
              size={80}
              source={{uri: avatar ? avatar : defaultHumanUrl}}
            />

            <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
              <Button textColor={colors.color2}>Change Avatar</Button>
            </TouchableOpacity>

            <TextInput
              {...inputOptions}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />

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

            <TextInput
              {...inputOptions}
              placeholder="Address"
              value={address}
              onChangeText={setAddress}
            />

            <TextInput
              {...inputOptions}
              placeholder="City"
              value={city}
              onChangeText={setCity}
            />

            <TextInput
              {...inputOptions}
              placeholder="Country"
              value={country}
              onChangeText={setCountry}
            />

            <TextInput
              {...inputOptions}
              placeholder="Pin Code"
              value={pinCode}
              onChangeText={setPinCode}
            />

            <Button
              loading={loading}
              textColor={colors.color2}
              disabled={disableBtn}
              style={styles.btn}
              onPress={submitHandler}>
              Send Verification Code
            </Button>

            <Text style={styles.orText}>OR</Text>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.link}>Log In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <Footer activeRoute="Profile" />
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
    fontWeight: '700',
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

export default SignUp;
