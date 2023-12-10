import {
  View,
  Text,
  Platform,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  BackHandler,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../styles/styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Headline, Searchbar} from 'react-native-paper';

export default function Searchmodal({
  searchQuery,
  setSearchQuery,
  setActiveSearch,
  products,
}) {
  const navigate = useNavigation();

  const backButtonHandler = () => {
    setActiveSearch(false);
    setSearchQuery('');
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backButtonHandler);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backButtonHandler);
    };
  }, []);

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        zIndex: 100,
        position: 'absolute',
        top: 0,
        backgroundColor: colors.color2,
        padding: 35,
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
      }}>
      <SafeAreaView>
        <Searchbar
          onChangeText={query => setSearchQuery(query)}
          placeholder="What is on your mind!"
          value={searchQuery}
          style={{marginTop: 15}}
        />
        <ScrollView>
          <View style={{paddingVertical: 40, paddingHorizontal: 20}}>
            {products.map((item, index) => (
              <SearchItem
                key={item._id}
                imgSrc={item.images[0]?.url}
                name={item.name}
                price={item.price}
                handler={() =>
                  navigate.navigate('ProductDetails', {id: item._id})
                }
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function SearchItem({imgSrc, name, price, handler}) {
  return (
    <TouchableOpacity onPress={handler}>
      <View
        style={{
          padding: 5,
          borderRadius: 10,
          elevation: 6,
          backgroundColor: colors.color2,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginVertical: 30,
          width: '100%',
        }}>
        <Image
          source={{uri: imgSrc}}
          style={{
            width: 80,
            height: 80,
            position: 'absolute',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            top: -15,
            left: 10,
          }}
          resizeMode="contain"
        />

        <View style={{width: '80%', paddingHorizontal: 30}}>
          <Text numberOfLines={1}>{name}</Text>
          <Headline style={{fontWeight: 900}} numberOfLines={1}>
            ${price}
          </Headline>
        </View>
      </View>
    </TouchableOpacity>
  );
}
