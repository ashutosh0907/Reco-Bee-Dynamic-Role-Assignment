import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {headerStyles} from './HeaderStyles';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/base';
import {BRAND} from '../../constants/color';
import {WIDTH} from '../../constants/config';
const Header = ({
  iconShown = true,
  icon = 'arrow-back',
  title,
  logoutShown = false,
  onIconPress,
  skipCallback,
}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        ...headerStyles.headercontainer,
      }}>
      {iconShown && (
        <TouchableOpacity
          onPress={
            onIconPress
              ? onIconPress
              : () => {
                  navigation.goBack();
                }
          }
          style={headerStyles.iconview}>
          <Icon type="material" name={icon} color={BRAND} size={WIDTH * 0.07} />
        </TouchableOpacity>
      )}
      <View
        style={{
          ...headerStyles.headertextview,
          alignItems: 'flex-start',
        }}>
        <Text style={headerStyles.text}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;
