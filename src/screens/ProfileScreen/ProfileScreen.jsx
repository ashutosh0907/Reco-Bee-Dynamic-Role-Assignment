import React, {Fragment, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {MyStatusBar} from '../../constants/config';
import {WHITE, BLACK, BRAND, LIGHTGRAY} from '../../constants/color';
import Header from '../../components/Header';
import {appStyles} from '../../styles/AppStyles';
import {Avatar, Icon} from '@rneui/base';
import {RFValue} from 'react-native-responsive-fontsize';

const ProfileScreen = ({navigation}) => {
  const [operations, setOperations] = useState([
    {id: '1', title: 'Edit Profile'},
    {id: '2', title: 'Settings'},
    {id: '3', title: 'Notifications'},
    {id: '4', title: 'Log Out'},
  ]);

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        if (item?.title == 'Settings') {
          navigation.navigate('Settings');
        }
      }}
      style={styles.operationItem}>
      <Text style={styles.operationText}>{item.title}</Text>
      <Icon
        name="chevron-right"
        type="feather"
        color={BLACK}
        size={RFValue(20)}
      />
    </TouchableOpacity>
  );

  return (
    <Fragment>
      <MyStatusBar backgroundColor={WHITE} barStyle={'dark-content'} />
      <Header icon={'arrow-back'} title={'Profile'} />
      <SafeAreaView style={appStyles.safeareacontainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.profileContainer}>
            <Avatar
              size="xlarge"
              rounded
              icon={{name: 'user', type: 'feather', color: BRAND}}
              containerStyle={{
                borderWidth: 0.3,
              }}
            />
            <Text style={styles.name}>Ashutosh Mohapatra</Text>
            <Text style={styles.role}>Software Engineer</Text>

            <FlatList
              data={operations}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.flatListContent}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  name: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
    color: BLACK,
    marginBottom: 5,
  },
  role: {
    fontSize: RFValue(16),
    color: LIGHTGRAY,
    marginBottom: 20,
  },
  operationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 0.4,
    width: '100%',
    borderBottomColor: LIGHTGRAY,
  },
  operationText: {
    fontSize: RFValue(16),
    color: BLACK,
  },
  flatListContent: {
    width: '100%',
    marginTop: 20,
  },
});

export default ProfileScreen;
