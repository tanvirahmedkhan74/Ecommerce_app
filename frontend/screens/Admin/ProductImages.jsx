import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {colors, defaultStyle} from '../../styles/styles';
import Header from '../../components/Header';
import ImageCard from '../../components/ImageCard';
import {Avatar, Button} from 'react-native-paper';

const ProductImages = ({route, navigation}) => {
  const [images] = React.useState(route.params.images);
  const [productId] = React.useState(route.params.id);
  const [imageChanged, setImageChanged] = React.useState(false);
  const loading = false;
  const [image, setImage] = React.useState(
    'https://png.pngtree.com/png-clipart/20200701/original/pngtree-gamebox-5-desigh-with-controller-png-image_5415243.jpg',
  );

  const deleteHandler = id => {
    console.log(id);
    console.log(productId);
  };
  const submitHandler = () => {};

  useEffect(() => {
    if (route.params) {
      if (route.params?.photo) {
        setImage(route.params.photo);
        setImageChanged(true);
      }
    }
  }, [route.params]);

  return (
    <View style={[defaultStyle, {backgroundColor: colors.color5}]}>
      <Header back={true} />
      <View style={{marginBottom: 20, paddingTop: 70}}>
        <Text style={styles.loginText}>Manage Images</Text>
      </View>

      <ScrollView style={{marginBottom: 20}}>
        <View style={styles.container}>
          {images.map((item, index) => (
            <ImageCard
              key={item._id}
              id={item._id}
              src={item.url}
              deleteHandler={deleteHandler}
            />
          ))}
        </View>
      </ScrollView>

      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          resizeMode="contain"
          source={{uri: image}}
        />

        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Camera', {updateProduct: true})
            }>
            <Avatar.Icon
              icon={'camera'}
              size={30}
              style={styles.cameraIcon}
              color={colors.color3}
            />
          </TouchableOpacity>
        </View>

        <Button
          style={{backgroundColor: colors.color1, padding: 2}}
          textColor={colors.color2}
          loading={loading}
          disabled={!imageChanged}
          onPress={submitHandler}>
          Add Image
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
    padding: 20,
    minHeight: 400,
    backgroundColor: colors.color2,
  },

  imageContainer: {
    borderRadius: 20,
    padding: 20,
    backgroundColor: colors.color3,
  },

  imageStyle: {
    width: 100,
    height: 100,
    backgroundColor: colors.color2,
    alignSelf: 'center',
  },

  cameraIcon: {
    backgroundColor: colors.color2,
    margin: 10,
    elevation: 5,
  },
});

export default ProductImages;
