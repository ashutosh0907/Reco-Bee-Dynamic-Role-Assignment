import React, {Fragment, useState} from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {MyStatusBar} from '../../constants/config';
import {WHITE} from '../../constants/color';
import {appStyles} from '../../styles/AppStyles.js';
import {Loader} from '../../components/Loader';
import Dropdown from '../../components/Dropdown/Dropdown.jsx';
import {settingsScreenStyles} from './settingsScreenStyles.js';
import {setUserRole} from '../../redux/actions/role.js';
import Header from '../../components/Header/Header.js';

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const role = useSelector(state => state.role);

  const options = ['Admin', 'Editor', 'Viewer'];

  const handleRoleChange = selectedRole => {
    dispatch(setUserRole(selectedRole));
  };

  return (
    <Fragment>
      <MyStatusBar backgroundColor={WHITE} barStyle={'dark-content'} />
      <Header icon={'arrow-back'} title={'Settings'} />
      <SafeAreaView style={appStyles.safeareacontainer}>
        <Loader visible={loader} />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <ScrollView
            keyboardShouldPersistTaps={'handled'}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
              alignItems: 'center',
            }}>
            <View style={settingsScreenStyles.mainContainer}>
              <View style={settingsScreenStyles.titleContainer}>
                <Text style={settingsScreenStyles.headText}>
                  Change Role Here :
                </Text>
              </View>
              <Dropdown
                width={'90%'}
                options={options}
                placeholder="Select a role"
                onValueChange={handleRoleChange}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreen;
