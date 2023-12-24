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

const products = [
  {
    _id: '2x3fg',
    name: 'ROG Strix G16 (2023) G614',
    price: '2225.88',
    stock: 23,
    images: [
      {
        url: 'https://m.media-amazon.com/images/I/71lB9KSbbhL._AC_UF894,1000_QL80_.jpg',
      },
    ],
  },

  {
    _id: '2x3fn',
    name: 'ROG Strix G16 (2023) G614',
    price: '2225.88',
    stock: 23,
    images: [
      {
        url: 'https://m.media-amazon.com/images/I/71lB9KSbbhL._AC_UF894,1000_QL80_.jpg',
      },
    ],
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

      <Footer activeRoute='Home'/>
    </>
  );
}
