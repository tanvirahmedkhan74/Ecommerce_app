import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../styles/styles';
import {Avatar} from 'react-native-paper';

const Footer = ({activeRoute = 'Home'}) => {
  const navigation = useNavigation();
  const isAuthenticated = false;
  const loading = false;
  const navigationHandler = key => {
    switch (key) {
        case 0:
            navigation.navigate('Home');
            break;
        case 1:
            navigation.navigate('Cart');
            break;
        case 2:
            isAuthenticated ? navigation.navigate('Profile') : navigation.navigate('Login');
        default:
            break;
    }
  };

  const AvatarOptions = {
    style: {backgroundColor: colors.color1},
    color: colors.color2,
    size: 50,
  };

  return (
    <View style={styles.footerBar}>
      <View style={{justifyContent: 'space-evenly', flexDirection: 'row'}}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigationHandler(1)}>
          <Avatar.Icon
            {...AvatarOptions}
            icon={activeRoute === 'Cart' ? 'shopping' : 'shopping-outline'}
          />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigationHandler(2)}>
          <Avatar.Icon
            {...AvatarOptions}
            icon={activeRoute === 'Profile' ? 'account' : 'account-outline'}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.footerMid}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
          }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigationHandler(0)}>
            <Avatar.Icon
              {...AvatarOptions}
              icon={activeRoute === 'Home' ? 'home' : 'home-outline'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerMid: {
    backgroundColor: colors.color2,
    height: 80,
    width: 80,
    position: 'absolute',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    top: -50,
  },

  footerBar: {
    backgroundColor: colors.color1,
    borderTopRightRadius: 120,
    borderTopLeftRadius: 120,
  },
});

export default Footer;
