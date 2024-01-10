import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Avatar, Headline} from 'react-native-paper';
import {colors} from '../styles/styles';

const SelectComponent = ({
  visible,
  setVisible,
  setCategoryId,
  setCategory,
  categories = [],
}) => {
  const selectCategoryHandler = item => {
    setCategory(item.category);
    setCategoryId(item._id);
    setVisible(false);
  };

  return (
    visible && (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setVisible(false)}>
          <Avatar.Icon
            icon="close"
            size={30}
            style={{alignSelf: 'flex-end', backgroundColor: colors.color1}}
          />
        </TouchableOpacity>

        <Headline style={styles.heading}>Select Category</Headline>
        <ScrollView>
          {categories.map(item => (
            <Text
              key={item._id}
              onPress={() => selectCategoryHandler(item)}
              style={styles.text}>
              {item.category}
            </Text>
          ))}
        </ScrollView>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '90%',
    padding: 35,
    backgroundColor: colors.color2,
    elevation: 10,
    top: 50,
    alignSelf: 'center',
    height: '92%',
    borderRadius: 20,
  },

  heading: {
    textAlign: 'center',
    marginVertical: 10,
    backgroundColor: colors.color3,
    color: colors.color2,
    borderRadius: 5,
    padding: 3,
  },

  text: {
    fontWeight: '300',
    textTransform: 'uppercase',
    marginVertical: 10,
    fontSize: 18,
  },
});

export default SelectComponent;
