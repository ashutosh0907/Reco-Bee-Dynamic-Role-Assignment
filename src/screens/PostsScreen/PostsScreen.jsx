import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {Fragment} from 'react';
import LatestPosts from '../HomeScreen/_blocks/LatestPosts';
import {MyStatusBar} from '../../constants/config';
import {appStyles} from '../../styles/AppStyles';
import Header from '../../components/Header';
import {BRAND, WHITE} from '../../constants/color';
import {useSelector} from 'react-redux';
import {RFValue} from 'react-native-responsive-fontsize';

const PostsScreen = () => {
  const role = useSelector(state => state.role);
  return (
    <Fragment>
      <MyStatusBar backgroundColor={WHITE} barStyle={'dark-content'} />
      <SafeAreaView style={appStyles.safeareacontainer}>
        <Header title={'Posts'} />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          {role == 'Editor' && (
            <View
              style={{
                width: '90%',
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  color: BRAND,
                  fontSize: RFValue(13),
                  fontWeight: 'bold',
                }}>
                Editor Add Post {'>>'}
              </Text>
            </View>
          )}
          <LatestPosts />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Fragment>
  );
};

export default PostsScreen;
