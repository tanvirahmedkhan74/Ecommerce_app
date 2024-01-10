import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {colors, defaultStyle} from '../styles/styles';
import Header from '../components/Header';
import {Avatar, Button} from 'react-native-paper';
import Searchmodal from '../components/Searchmodal';
import ProductCard from '../components/ProductCard';
import {useNavigation} from '@react-navigation/native';
import Footer from '../components/Footer';

const categories = [
  {category: 'Men', _id: '5x23'},
  {category: 'Women', _id: '4x23'},
  {category: 'Electronics', _id: '2x13'},
  {category: 'Footwear', _id: '1x45'},
  {category: 'Music', _id: '5x43'},
  {category: 'Relegion', _id: '5x29'},
];

export const products = [
  {
    _id: '78h45k',
    name: 'Apple AirPods Pro with MagSafe Charging Case',
    price: '249.00',
    stock: 15,
    images: [
      {
        url: 'https://adminapi.applegadgetsbd.com/storage/media/large/4203-76294.jpg',
      },
      {
        url: 'https://m.media-amazon.com/images/I/71-y54a15IL._AC_UL320_.jpg',
      },
    ],
    type: 'wireless',
    noiseCancelling: true,
  },
  {
    _id: '34fgg8',
    name: 'Sony WH-1000XM5 Wireless Noise-Canceling Headphones',
    price: '398.00',
    stock: 5,
    images: [
      {
        url: 'https://adminapi.applegadgetsbd.com/storage/media/large/5318-55349.jpg',
      },
      {
        url: 'https://m.media-amazon.com/images/I/61vW98-Y2LL._AC_UL320_.jpg',
      },
    ],
    type: 'wireless',
    noiseCancelling: true,
  },
  {
    _id: '92ih3c',
    name: 'Sennheiser HD 660S HiFi Over-Ear Headphones',
    price: '249.99',
    stock: 18,
    images: [
      {
        url: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71kC1BXo9PL._AC_UF1000,1000_QL80_.jpg',
      },
      {
        url: 'https://m.media-amazon.com/images/I/613K-aVj05L._AC_UL320_.jpg',
      },
    ],
    type: 'wired',
    openBack: true,
  },
  {
    _id: '56yh7j',
    name: 'Jabra Elite 75t True Wireless Earbuds',
    price: 149.99,
    stock: 27,
    images: [
      {
        url: 'https://adminapi.applegadgetsbd.com/storage/media/large/2714-11410.jpg',
      },
      {
        url: 'https://m.media-amazon.com/images/I/712rV347wOL._AC_UL320_.jpg',
      },
    ],
    type: 'wireless',
    waterResistant: true,
  },
  {
    _id: '3k2fg0',
    name: 'Audio-Technica ATH-M50x Professional Studio Headphones',
    price: 169.00,
    stock: 10,
    images: [
      {
        url: 'https://gearsforears.com/cdn/shop/products/M50X-black_1600x.jpg?v=1593138125',
      },
      {
        url: 'https://m.media-amazon.com/images/I/6160q98-QYL._AC_UL320_.jpg',
      },
    ],
    type: 'wired',
    closedBack: true,
  },
];


export default function HomeScreen() {
  const [category, setCategory] = useState('');
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigation();

  const categoryButtonHandler = id => {
    setCategory(id);
    // console.log(id);
  };

  const addToCardHandler = id => {
    console.log(id);
  };

  // console.log(activeSearch);
  return (
    <>
      {activeSearch && (
        <Searchmodal
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}
      <View style={defaultStyle}>
        {/* Header */}
        <Header back={false} />

        <View
          style={{
            paddingTop: 70,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{fontSize: 25}}>Our</Text>
            <Text style={{fontSize: 25, fontWeight: 700}}>Products</Text>
          </View>

          {/* Search Bar */}
          <View>
            <TouchableOpacity onPress={() => setActiveSearch(prev => !prev)}>
              <Avatar.Icon
                icon={'magnify'}
                color="gray"
                size={50}
                style={{backgroundColor: colors.color2, elevation: 12}}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories */}

        <View style={{flexDirection: 'row', height: 80}}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{alignItems: 'center'}}>
            {categories.map((item, index) => (
              <Button
                key={item._id}
                style={{
                  backgroundColor:
                    category === item._id ? colors.color1 : colors.color5,
                  borderRadius: 100,
                  margin: 5,
                }}
                onPress={() => categoryButtonHandler(item._id)}>
                <Text
                  style={{
                    fontSize: 12,
                    color: category === item._id ? colors.color2 : 'gray',
                  }}>
                  {' '}
                  {item.category}{' '}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </View>

        {/* Products */}

        <View style={{flex: 1}}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {products.map((item, index) => (
              <ProductCard
                stock={item.stock}
                name={item.name}
                id={item._id}
                image={item.images[0]?.url}
                price={item.price}
                key={item._id}
                idx={index}
                addToCardHandler={addToCardHandler}
                navigate={navigate}
              />
            ))}
          </ScrollView>
        </View>
      </View>

      <Footer activeRoute="Home" />
    </>
  );
}
