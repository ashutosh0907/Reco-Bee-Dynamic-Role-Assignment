import React, {Fragment, useState} from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setUserRole} from '../../redux/actions/role';
import {Avatar, SpeedDial} from '@rneui/base';
import {MyStatusBar, WIDTH} from '../../constants/config';
import {BRAND, DARKPURPLE, WHITE} from '../../constants/color';
import {appStyles} from '../../styles/AppStyles.js';
import {Loader} from '../../components/Loader';
import {loginScreenStyles} from './loginScreenStyles.js';
import Dropdown from '../../components/Dropdown/Dropdown.jsx';
import CustomButton from '../../components/CustomButton/CustomButton.js';

const LoginScreen = ({navigation}) => {
  const [loader, setLoader] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const role = useSelector(state => state.role);

  const options = ['Admin', 'Editor', 'Viewer'];

  const handleLogin = () => {
    navigation.navigate('AppNavigator');
  };

  const handleRoleChange = selectedRole => {
    dispatch(setUserRole(selectedRole));
  };

  return (
    <Fragment>
      <MyStatusBar backgroundColor={WHITE} barStyle={'light-content'} />
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
            <View style={loginScreenStyles.mainContainer}>
              <Avatar
                icon={'admin-panel-settings'}
                onPress={() => {
                  setIsVisible(true);
                }}
                size={WIDTH * 0.2}
                rounded
              />
              <Dropdown
                width={'90%'}
                options={options}
                placeholder="Select a role"
                onValueChange={handleRoleChange}
              />
              <SpeedDial
                color={BRAND}
                isOpen={isVisible}
                icon={{name: 'edit', color: WHITE}}
                openIcon={{name: 'close', color: WHITE}}
                onOpen={() => setIsVisible(!isVisible)}
                onClose={() => setIsVisible(!isVisible)}>
                <SpeedDial.Action
                  color={DARKPURPLE}
                  icon={{name: 'admin-panel-settings', color: WHITE}}
                  title="Login as Admin"
                  onPress={() => {
                    handleRoleChange('Admin');
                    setIsVisible(!isVisible);
                  }}
                />
                <SpeedDial.Action
                  color={DARKPURPLE}
                  icon={{name: 'edit', color: '#fff'}}
                  title="Login as Editor"
                  onPress={() => {
                    handleRoleChange('Editor');
                    setIsVisible(!isVisible);
                  }}
                />
                <SpeedDial.Action
                  color={DARKPURPLE}
                  icon={{name: 'preview', color: '#fff'}}
                  title="Login as Viewer"
                  onPress={() => {
                    handleRoleChange('Viewer');
                    setIsVisible(!isVisible);
                  }}
                />
              </SpeedDial>
              <CustomButton
                title={'Login'}
                onPress={() => {
                  handleLogin();
                }}
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

export default LoginScreen;
