import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {colors, defaultStyle} from '../styles/styles';
import Header from '../components/Header';
import {Avatar, Button} from 'react-native-paper';

const categories = [
  {category: 'Men', _id: '5x23'},
  {category: 'Women', _id: '4x23'},
  {category: 'Electronics', _id: '2x13'},
  {category: 'Footwear', _id: '1x45'},
  {category: 'Music', _id: '5x43'},
  {category: 'Relegion', _id: '5x29'},
];

export default function HomeScreen() {
  const [category, setCategory] = useState('');
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categoryButtonHandler = id => {
    setCategory(id);
    // console.log(id);
  };

  return (
    <View style={defaultStyle}>
      {/* Header */}
      <Header back={true} />

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
          <TouchableOpacity>
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
                backgroundColor: category === item._id ? colors.color1 : colors.color5,
                borderRadius: 100,
                margin: 5,
              }}
              onPress={() => categoryButtonHandler(item._id)}>
              <Text style={{fontSize: 12, color: category === item._id ? colors.color2 : 'gray'}}>
                {' '}
                {item.category}{' '}
              </Text>
            </Button>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
