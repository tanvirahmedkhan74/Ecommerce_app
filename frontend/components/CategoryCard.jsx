import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../styles/styles';
import {Avatar} from 'react-native-paper';

const CategoryCard = ({name, id, deleteHandler}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <TouchableOpacity onPress={() => deleteHandler(id)}>
        <Avatar.Icon
          icon={'delete'}
          size={40}
          style={{backgroundColor: colors.color1}}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    margin: 10,
    backgroundColor: colors.color2,
    elevation: 10,
    borderRadius: 10,
  },

  text: {
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

export default CategoryCard;
