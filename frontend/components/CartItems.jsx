import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../styles/styles';
import {Avatar} from 'react-native-paper';

export default function CartItems({
  name,
  price,
  id,
  image,
  quantity,
  stock,
  index,
  increamentHandler,
  decreamentHandler,
  navigation,
}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '40%',
          backgroundColor: index % 2 === 0 ? colors.color1 : colors.color3,
          borderTopRightRadius: 100,
          borderBottomRightRadius: 100,
        }}>
        <Image
          source={{uri: image}}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.container2}>
        <Text
          style={{fontSize: 17, fontWeight: '500'}}
          numberOfLines={1}
          onPress={() => navigation.navigate('ProductDetails', {id})}>
          {name}
        </Text>
        <Text style={{fontSize: 17, fontWeight: '900'}} numberOfLines={1}>
          $ {price}
        </Text>
      </View>

      <View style={styles.container3}>
        <TouchableOpacity onPress={() => decreamentHandler(id, quantity)}>
          <Avatar.Icon icon={'minus'} size={22} style={styles.minusAvatar} />
        </TouchableOpacity>

        <Text style={styles.qunatityText}>{quantity}</Text>

        <TouchableOpacity
          onPress={() => increamentHandler(id, quantity, stock)}>
          <Avatar.Icon icon={'plus'} size={22} style={styles.minusAvatar} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    marginVertical: 20,
  },

  image: {
    width: 200,
    height: '100%',
    top: '-20%',
    left: '10%',
  },

  container2: {
    width: '40%',
    paddingHorizontal: 25,
  },

  container3: {
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '20%',
    height: 80,
  },

  minusAvatar: {
    borderRadius: 5,
    height: 25,
    width: 25,
    backgroundColor: colors.color5,
  },

  qunatityText: {
    backgroundColor: colors.color4,
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 25,
    width: 25,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: colors.color5,
  },
});
