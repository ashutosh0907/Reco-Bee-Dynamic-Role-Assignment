import React, {Fragment, useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import {HEIGHT, MyStatusBar} from '../../../constants/config';
import {WHITE, BRAND, LIGHTGRAY, BLACK} from '../../../constants/color.js';
import {appStyles} from '../../../styles/AppStyles.js';
import {Loader} from '../../../components/Loader.js';
import {Card, Button, Icon} from '@rneui/base';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomButton from '../../../components/CustomButton/CustomButton.js';

const RecommendedForYou = () => {
  const [loader, setLoader] = useState(false);

  const recommendedItems = [
    {
      id: '1',
      title: 'Trendy Jacket',
      description: 'Stay warm and stylish with this trendy jacket.',
      price: '49.99',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      title: 'Classic Watch',
      description: 'A timeless piece that complements any outfit.',
      price: '99.99',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '4',
      title: 'Classic Watch',
      description: 'A timeless piece that complements any outfit.',
      price: '99.99',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '5',
      title: 'T-shirt',
      description: 'A timeless piece that complements any outfit.',
      price: '99.99',
      image: 'https://via.placeholder.com/150',
    },
    // Add more items here
  ];

  const renderItem = ({item}) => (
    <Card key={item.id} containerStyle={styles.card}>
      <View style={styles.cardContent}>
        <Image source={{uri: item.image}} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={styles.productDescription}>{item.description}</Text>
          <Text style={styles.productPrice}>${item.price}</Text>
          <Button
            title="Buy Now"
            buttonStyle={styles.buyButton}
            icon={
              <Icon
                style={{
                  marginRight: 5,
                }}
                name="shopping-cart"
                type="font-awesome"
                color={WHITE}
                size={RFValue(14)}
              />
            }
          />
        </View>
      </View>
    </Card>
  );

  return (
    <Fragment>
      <MyStatusBar backgroundColor={WHITE} barStyle={'light-content'} />
      <SafeAreaView style={appStyles.safeareacontainer}>
        <Loader visible={loader} />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <FlatList
            data={recommendedItems}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
          <CustomButton title={'See More Recommendations'} />
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
  headerContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
    color: BRAND,
  },
  card: {
    width: '100%',
    borderRadius: 10,
    padding: 0,
  },
  cardContent: {
    flexDirection: 'row',
    width: '90%',
  },
  productImage: {
    width: '30%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
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
  buyButton: {
    backgroundColor: BLACK,
    borderRadius: 5,
  },
  ctaContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: BRAND,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  ctaText: {
    color: WHITE,
    fontSize: RFValue(16),
    fontWeight: 'bold',
  },
});

export default RecommendedForYou;
