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
import {MyStatusBar} from '../../constants/config';
import {BLACK, LIGHTGRAY, WHITE, BRAND} from '../../constants/color';
import Header from '../../components/Header';
import {appStyles} from '../../styles/AppStyles';
import {Card, Icon} from '@rneui/base';
import {RFValue} from 'react-native-responsive-fontsize';

const ExploreScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setData(data.products.slice(0, 10)); // Just get a few items for demo
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const renderItem = ({item}) => (
    <Card containerStyle={styles.card}>
      <Image source={{uri: item.thumbnail}} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Explore</Text>
        <Icon
          name="arrow-right"
          type="feather"
          color={WHITE}
          size={RFValue(14)}
        />
      </TouchableOpacity>
    </Card>
  );

  return (
    <Fragment>
      <MyStatusBar backgroundColor={WHITE} barStyle={'dark-content'} />
      <Header icon={'arrow-back'} title={'Explore'} />
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
              contentContainerStyle={styles.flatListContent}
              numColumns={2}
            />
          )}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '46%',
    borderRadius: 10,
    padding: 2,
    elevation: 3,
    alignSelf: 'center',
    margin: 10,
  },
  productImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  productTitle: {
    fontSize: RFValue(16),
    fontWeight: 'bold',
    color: BLACK,
    marginTop: 10,
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
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: BRAND,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: WHITE,
    fontSize: RFValue(14),
    marginRight: 5,
  },
  flatListContent: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ExploreScreen;
