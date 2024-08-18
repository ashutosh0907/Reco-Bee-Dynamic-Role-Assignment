import {
  ActivityIndicator,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import {HEIGHT, MyStatusBar} from '../../constants/config';
import {RFValue} from 'react-native-responsive-fontsize';
import {BLACK, BRAND, LIGHTGRAY, WHITE} from '../../constants/color';
import {Fragment, useEffect, useState} from 'react';
import Header from '../../components/Header';
import {appStyles} from '../../styles/AppStyles';
import {Card, Rating} from '@rneui/base';

const PopularContentsScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <Fragment>
      <MyStatusBar backgroundColor={WHITE} barStyle={'dark-content'} />
      <Header icon={'arrow-back'} title={'Popular Contents'} />
      <SafeAreaView style={appStyles.safeareacontainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          {loading ? (
            <ActivityIndicator size="large" color={BRAND} />
          ) : (
            <FlatList
              data={products}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <Card key={item.id} containerStyle={styles.card}>
                  <Card.Title style={styles.cardTitle}>{item.title}</Card.Title>
                  <Card.Divider />
                  <Image
                    source={{
                      uri: item.thumbnail || 'https://via.placeholder.com/150',
                    }}
                    style={styles.productImage}
                    resizeMode="stretch"
                  />
                  <Text style={styles.productDescription}>
                    {item.description}
                  </Text>
                  <Text style={styles.productPrice}>$ {item.price}</Text>
                </Card>
              )}
              contentContainerStyle={styles.scrollViewContent}
            />
          )}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    padding: 10,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    borderRadius: 10,
    marginBottom: 20,
  },
  productImage: {
    width: '100%',
    height: HEIGHT * 0.2,
    borderRadius: 10,
    resizeMode: 'stretch',
  },
  productDescription: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: RFValue(11),
    color: LIGHTGRAY,
    textAlign: 'center',
  },
  rating: {
    marginVertical: 10,
  },
  productPrice: {
    color: BLACK,
    fontWeight: 'bold',
    fontSize: RFValue(13),
    alignSelf: 'center',
  },
  cardTitle: {
    color: BRAND,
    fontSize: RFValue(12),
    fontWeight: '700',
  },
});

export default PopularContentsScreen;
