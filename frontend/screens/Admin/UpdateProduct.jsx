import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {colors, defaultStyle, inputStyle} from '../../styles/styles';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import {Button, TextInput} from 'react-native-paper';
import SelectComponent from '../../components/SelectComponent';

const inputOptions = {
  style: inputStyle,
  mode: 'outlined',
  color: colors.color1,
};

const UpdateProduct = ({navigation, route}) => {
  const loading = false;
  const updateLoading = false;
  const [visible, setVisible] = React.useState(false);

  const [id, setId] = React.useState(route.params.id);
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [stock, setStock] = React.useState('');
  const [category, setCategory] = React.useState('Wireless');
  const [categoryId, setCategoryId] = React.useState('');
  const [categories, setCategories] = React.useState([
    {category: 'Wireless', _id: '1'},
    {category: 'Wired', _id: '2'},
    {category: 'Headphones', _id: '3'},
    {category: 'Earphones', _id: '4'},
    {category: 'Speakers', _id: '5'},
    {category: 'Accessories', _id: '6'},
  ]);

  const submitHandler = () => {
    console.log(name, price, description, stock, category, categoryId);
  };

  return (
    <>
      <View style={{...defaultStyle, backgroundColor: colors.color5}}>
        <Header back={true} />
        <View style={{marginBottom: 20, paddingTop: 70}}>
          <Text style={styles.loginText}>Edit Products</Text>
        </View>

        {loading ? (
          <Loader />
        ) : (
          <ScrollView style={styles.container}>
            <View style={{justifyContent: 'center', height: 650}}>
              <Button
                onPress={() =>
                  navigation.navigate('ProductImages', {id, images: []})
                }
                textColor={colors.color1}>
                Manage Images
              </Button>

              <TextInput
                style={[inputOptions, {marginTop: 20}]}
                placeholder="Name"
                value={name}
                onChangeText={setName}
              />

              <TextInput
                style={[inputOptions, {marginTop: 20}]}
                placeholder="Price"
                value={price}
                onChangeText={setPrice}
                keyboardType="number-pad"
              />

              <TextInput
                style={[inputOptions, {marginTop: 20}]}
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
              />

              <TextInput
                style={[inputOptions, {marginTop: 20}]}
                placeholder="Stock"
                value={stock}
                onChangeText={setStock}
                keyboardType="number-pad"
              />
              <Text
                style={[
                  inputStyle,
                  {
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    borderRadius: 5,
                    marginTop: 20,
                    fontWeight: '800',
                  },
                ]}
                onPress={() => setVisible(prev => !prev)}>
                {category}
              </Text>
              <Button
                textColor={colors.color1}
                style={{backgroundColor: colors.color2, padding: 5, margin: 20}}
                loading={updateLoading}
                disabled={updateLoading}
                onPress={() => submitHandler()}>
                Update
              </Button>
            </View>
          </ScrollView>
        )}
      </View>

      <SelectComponent
        visible={visible}
        setVisible={setVisible}
        setCategory={setCategory}
        setCategoryId={setCategoryId}
        categories={categories}
      />
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
    padding: 20,
    backgroundColor: colors.color3,
    elevation: 10,
    borderRadius: 20,
  },
});

export default UpdateProduct;
