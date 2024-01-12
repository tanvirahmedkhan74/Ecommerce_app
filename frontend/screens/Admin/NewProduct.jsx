import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect } from 'react';
import {colors, defaultStyle, inputStyle} from '../../styles/styles';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import {Avatar, Button, TextInput} from 'react-native-paper';
import SelectComponent from '../../components/SelectComponent';

const inputOptions = {
  style: inputStyle,
  mode: 'outlined',
  color: colors.color1,
};

const NewProduct = ({navigation, route}) => {
  const loading = false;
  const [visible, setVisible] = React.useState(false);

  const [image, setImage] = React.useState('');
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

  useEffect(() => {
    // console.log(route.params);
    if (route.params) {
      if (route.params?.photo) {
        setImage(route.params.photo);
      }
    }
  },[route.params])

  return (
    <>
      <View style={{...defaultStyle, backgroundColor: colors.color5}}>
        <Header back={true} />
        <View style={{marginBottom: 20, paddingTop: 70}}>
          <Text style={styles.loginText}>Add New Product</Text>
        </View>

        {loading ? (
          <Loader />
        ) : (
          <ScrollView style={styles.container}>
            <View style={{justifyContent: 'center', height: 650}}>
              <View style={styles.imageContainer}>
                <Avatar.Image
                  size={80}
                  style={{backgroundColor: colors.color1}}
                  source={{uri: image ? image : null}}
                />

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Camera', {newProduct: true})
                  }>
                  <Avatar.Icon
                    icon={'camera'}
                    size={30}
                    style={styles.cameraIcon}
                  />
                </TouchableOpacity>
              </View>

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
                loading={loading}
                disabled={loading}
                onPress={() => submitHandler()}>
                Create
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

  imageContainer: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 20,
  },

  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 20,
    backgroundColor: colors.color1,
    elevation: 10,
    borderRadius: 50,
    padding: 5,
    margin: 5,
    color: colors.color2,
  },
});

export default NewProduct;
