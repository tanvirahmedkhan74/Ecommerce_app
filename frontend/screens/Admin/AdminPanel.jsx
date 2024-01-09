import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {colors, defaultStyle} from '../../styles/styles';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import ButtonBox from '../../components/ButtonBox';
import ProductListHeading from '../../components/ProductListHeading';
import {products} from '../HomeScreen';
import ProductListItem from '../../components/ProductListItem';

const AdminPanel = ({navigation}) => {
  const loading = false;
  const navigationHandler = () => {
    console.log('Navigation');
  };

  const deleteProductHandler = id => {
    console.log(id);
  }

  return (
    <View style={defaultStyle}>
      <Header back={true} />
      <View style={{marginBottom: 20, paddingTop: 70}}>
        <Text style={styles.loginText}>Admin Panel</Text>
      </View>
      {loading ? (
        <Loader />
      ) : (
        <>
          <View style={styles.container}></View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                margin: 10,
                justifyContent: 'space-between',
              }}>
              <ButtonBox
                icon={'plus'}
                text={'Product'}
                handler={navigationHandler}
              />
              <ButtonBox
                icon={'format-list-bulleted-square'}
                text={'All Orders'}
                handler={navigationHandler}
                reverse={true}
              />
              <ButtonBox
                icon={'plus'}
                text={'Category'}
                handler={navigationHandler}
              />
            </View>
          </View>

          <ProductListHeading />

          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              {products.map((item, index) => (
                <ProductListItem
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  imgSrc={item.images[0].url}
                  category={item.category}
                  stock={item.stock}
                  price={item.price}
                  i={index}
                  navigation={navigation}
                  deleteHandler={deleteProductHandler}
                />
              ))}
            </View>
          </ScrollView>
        </>
      )}
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
    backgroundColor: colors.color3,
    alignItems: 'center',
    borderRadius: 20,
  },
});

export default AdminPanel;
