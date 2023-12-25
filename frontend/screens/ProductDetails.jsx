import {View, Text, Dimensions, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import {colors, defaultStyle} from '../styles/styles';
import Header from '../components/Header';
import Carousel from 'react-native-snap-carousel';
import { Avatar, Button } from 'react-native-paper';
import Toast from 'react-native-toast-message';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH;

const ProductDetails = ({route: {params}}) => {
  const name = "Zephyrus Pro ASUS"
  const price = "$2205"
  const description = 'New Premium Quality Laptop in town!'
  const stock = 5;

  const [quantity, setQuantity] = useState(1);
  const isCarousel = useRef(null);
  const images = [
    {
      id: '2x87',
      url: 'https://www.asus.com/media/Odin/Websites/global/ProductLine/20200824120546.jpg',
    },

    {
      id: '2x88',
      url: 'https://bme.com.bd/public/uploads/products/photos/mniUesSTmiQfDSSBTLQcBW4i32rgkn53FcWJYtrt.jpeg',
    },
  ];

  const increaseQty = () => {
    setQuantity((prev) => prev < stock ? prev + 1 : prev);
  }

  const decreaseQty = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  }

  const addToCartHandler = () => {
    if(stock === 0) return Toast.show({
        type: 'error',
        text1: 'Product Out of Stock!',
    });
    Toast.show({
        type: 'success',
        text1: 'Added to Cart!'
    })
  }

  return (
    <View style={{...defaultStyle, padding: 0, backgroundColor: colors.color1}}>
      <Header back={true} />
      <Carousel
        layout="stack"
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={isCarousel}
        data={images}
        renderItem={carouselCardItem}
      />
      <View style={styles.productBackground}>
        <Text style={styles.detailsText} numberOfLines={2}>{name}</Text>
        <Text style={styles.detailsText} numberOfLines={2}>{price}</Text>
        <Text style={styles.detailsText} numberOfLines={2}>{description}</Text>
        <View style={styles.innerDetails}>
            <Text style={{fontWeight: '700', color: colors.color3}}>Quantity</Text>
            <View style={styles.innerDetails2}>
                <TouchableOpacity onPress={decreaseQty}>
                    <Avatar.Icon icon='minus' size={20} style={styles.minusAvatar}/>
                </TouchableOpacity>

                <Text style={styles.quantityText}>{quantity}</Text>

                <TouchableOpacity onPress={increaseQty}>
                    <Avatar.Icon icon='plus' size={20} style={styles.minusAvatar}/>
                </TouchableOpacity>
            </View>
        </View>
            <TouchableOpacity activeOpacity={.8} onPress={addToCartHandler}>
                <Button icon={'cart'} style={styles.btn} textColor={colors.color2}>Add To Cart</Button>
            </TouchableOpacity>
      </View>
    </View>
  );
};

const carouselCardItem = ({item, index}) => {
  return (
    <View style={styles.container} key={index}>
      {item.url ? (
        <Image
          source={{uri: item.url}}
          style={styles.images}
          resizeMode="contain"
        />
      ) : (
        <Text>Invalid image URL</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color1,
    width: ITEM_WIDTH,
    paddingVertical: 70,
    height: 380
  },
  images: {
    width: ITEM_WIDTH,
    height: 250,
  },
  productBackground: {
    flex: 1,
    backgroundColor: colors.color2,
    padding: 35,
    marginTop: -380,
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55
  },

  detailsText: {
    fontSize: 25,
  },

  innerDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5
  },

  innerDetails2: {
    width: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  minusAvatar: {
    backgroundColor: colors.color5,
    borderRadius: 5,
    height: 25,
    width: 25
  },

  quantityText: {
    backgroundColor: colors.color4,
    height: 25,
    width: 25,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.color5,
  },

  btn: {
    borderRadius: 100,
    backgroundColor: colors.color3,
    padding: 5,
    marginVertical: 35
  }
});
export default ProductDetails;
