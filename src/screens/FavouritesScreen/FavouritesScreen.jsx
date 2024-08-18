import React, {Fragment, useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {HEIGHT, MyStatusBar} from '../../constants/config';
import {WHITE, BRAND, LIGHTGRAY, BLACK, RED} from '../../constants/color';
import {Loader} from '../../components/Loader';
import {appStyles} from '../../styles/AppStyles';
import Header from '../../components/Header';
import {Card, Icon} from '@rneui/base';
import {RFValue} from 'react-native-responsive-fontsize';

const FavouritesScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dummy API call
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setData(data.products);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const renderItem = ({item}) => {
    return (
      <Card containerStyle={styles.card}>
        <View style={styles.cardContent}>
          <Image source={{uri: item?.thumbnail}} style={styles.productImage} />
          <View style={styles.productDetails}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
            <TouchableOpacity style={styles.heartContainer}>
              <Icon
                iconStyle={{
                  color: RED,
                }}
                name="heart"
                type="font-awesome"
                color={BRAND}
                size={RFValue(20)}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    );
  };

  return (
    <Fragment>
      <MyStatusBar backgroundColor={WHITE} barStyle={'light-content'} />
      <Header icon={'arrow-back'} title={'My Favourites'} />
      <SafeAreaView style={appStyles.safeareacontainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          {loading ? (
            <ActivityIndicator
              size="large"
              color={BRAND}
              style={styles.loadingIndicator}
            />
          ) : (
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              numColumns={2}
              contentContainerStyle={styles.flatListContent}
            />
          )}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 10,
    padding: 0,
    margin: 5,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: '40%',
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  productDetails: {
    padding: 10,
    flex: 1,
  },
  productTitle: {
    fontSize: RFValue(16),
    fontWeight: 'bold',
    color: BLACK,
  },
  productDescription: {
    fontSize: RFValue(12),
    color: LIGHTGRAY,
    marginVertical: 5,
  },
  productPrice: {
    fontSize: RFValue(14),
    fontWeight: 'bold',
    color: BRAND,
    marginBottom: 10,
  },
  heartContainer: {
    alignItems: 'flex-end',
  },
  flatListContent: {
    padding: 10,
  },
  loadingIndicator: {
    marginTop: HEIGHT * 0.2,
  },
});

export default FavouritesScreen;
