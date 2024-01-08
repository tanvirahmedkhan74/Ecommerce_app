import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, defaultStyle} from '../styles/styles';
import {Avatar, Button} from 'react-native-paper';
import ButtonBox from '../components/ButtonBox';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const user = {
  name: 'John Doe',
  email: 'johndoe@gmail.com',
};

const loading = false;

const Profile = ({navigation}) => {
  const [avatar, setAvatar] = React.useState(null);

  const logoutHandler = () => {
  };

  const navigateHandler = (text) => {
    switch (text) {
        case "Admin":
            navigation.navigate("AdminPanel");
            break;
        case "Orders":
            navigation.navigate("Orders");
            break;
        case "Profile":
            navigation.navigate("UpdateProfile");
            break;
        case "Password":
            navigation.navigate("ChangePassword");
            break;
        case "Sign Out":
            logoutHandler();
            break;
        default:
            break;
    }
  };

  return (
    <>
      <View style={defaultStyle}>
        {/* Heading */}
        <View style={{marginBottom: 20}}>
          <Text style={styles.loginText}>Profile</Text>
        </View>

        {loading ? (
          <Loader />
        ) : (
          <>
            <View style={styles.container}>
              <Avatar.Image
                source={{
                  uri: avatar,
                }}
                size={100}
                style={{backgroundColor: colors.color1}}
              />

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Camera', {updateProfile: true})
                }>
                <Button>Change Picture</Button>
              </TouchableOpacity>

              <Text style={styles.name}>{user?.name}</Text>
              <Text style={styles.email}>{user?.email}</Text>
            </View>

            <View>
              <View style={styles.innerContainer}>
                <ButtonBox
                  handler={navigateHandler}
                  text={'Orders'}
                  icon={'format-list-bulleted-square'}
                />
                <ButtonBox
                  handler={navigateHandler}
                  text={'Admin'}
                  icon={'view-dashboard'}
                  reverse={true}
                />
                <ButtonBox
                  handler={navigateHandler}
                  text={'Profile'}
                  icon={'pencil'}
                />
              </View>

              <View
                style={[
                  styles.innerContainer,
                  {justifyContent: 'space-evenly'},
                ]}>
                <ButtonBox
                  handler={navigateHandler}
                  text={'Password'}
                  icon={'form-textbox-password'}
                />
                <ButtonBox
                  handler={navigateHandler}
                  text={'Sign Out'}
                  icon={'exit-to-app'}
                />
              </View>
            </View>
          </>
        )}
      </View>

      <Footer />
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

  container: {
    backgroundColor: colors.color3,
    padding: 30,
    borderRadius: 20,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  name: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.color2,
    marginTop: 10,
  },

  email: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.color2,
  },

  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
});

export default Profile;
