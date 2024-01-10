import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../styles/styles';
import {Avatar, Button} from 'react-native-paper';

const ProductModal = ({id, deleteHandler, navigation, setOpenModal}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.closeBtn}
        onPress={() => setOpenModal(false)}>
        <Avatar.Icon
          icon={'close'}
          size={28}
          style={{backgroundColor: colors.color1}}
        />
      </TouchableOpacity>
      <Text
        style={styles.text}
        onPress={() => navigation.navigate('UpdateProduct', {id})}>
        Edit
      </Text>
      <Button icon={'delete'} textColor={colors.color1} onPress={() => deleteHandler(id)}>
        Delete
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 200,
    borderRadius: 10,
    padding: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    zIndex: 100,
    backgroundColor: colors.color2,
    elevation: 10
  },

  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
  },

  text: {
    fontWeight: '900',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default ProductModal;
