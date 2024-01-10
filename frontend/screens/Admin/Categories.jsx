import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {colors, defaultStyle, inputStyle} from '../../styles/styles';
import Header from '../../components/Header';
import CategoryCard from '../../components/CategoryCard';
import {Button, TextInput} from 'react-native-paper';

const inputOptions = {
  style: inputStyle,
  mode: 'outlined',
  color: colors.color1,
};

const categories = [
  {
    _id: '125478',
    name: 'Electronics',
  },
  {
    _id: '369852',
    name: 'Toys',
  },
  {
    _id: '754321',
    name: 'Kitchen',
  },
  {
    _id: '984625',
    name: 'Books',
  },
  {
    _id: '456987',
    name: 'Clothing',
  },
  {
    _id: '258369',
    name: 'Sports & Outdoors',
  },
  {
    _id: '654987',
    name: 'Home & Garden',
  },
  {
    _id: '365214',
    name: 'Health & Beauty',
  },
  {
    _id: '852963',
    name: 'Pet Supplies',
  },
  {
    _id: '425631',
    name: 'Grocery',
  },
];

const loading = true;
const Categories = () => {
  const [category, setCategory] = useState('');

  const deleteHandler = id => {
    console.log(id);
  };

  const submitHandler = () => {};

  return (
    <View style={defaultStyle}>
      <Header back={true} />
      <View style={{marginBottom: 20, paddingTop: 70}}>
        <Text style={styles.loginText}>Categories</Text>
      </View>

      <ScrollView style={{marginBottom: 20}}>
        <View style={styles.container}>
          {categories.map(item => {
            return (
              <CategoryCard
                key={item._id}
                name={item.name}
                id={item._id}
                deleteHandler={deleteHandler}
              />
            );
          })}
        </View>
      </ScrollView>

      <View style={styles.midContainer}>
        <TextInput
          style={inputOptions}
          placeholder="Category..."
          value={category}
          onChangeText={setCategory}
        />
        <Button
          textColor={colors.color2}
          mode="outlined"
          style={{padding: 5, marginHorizontal: 80, marginTop: 20}}
          onPress={() => submitHandler()}
          disabled={category === ''}
          loading={loading}>
          Add
        </Button>
      </View>
    </View>
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
    backgroundColor: colors.color2,
    padding: 20,
    minHeight: 400,
  },

  midContainer: {
    padding: 20,
    elevation: 10,
    borderRadius: 20,
    backgroundColor: colors.color3,
  },
});

export default Categories;
