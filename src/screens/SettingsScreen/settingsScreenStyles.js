import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {BRAND, DARKPURPLE, GREEN, WHITE} from '../../constants/color';

export const settingsScreenStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headText: {
    fontSize: RFValue(15),
    fontWeight: '500',
    color: BRAND,
  },
  titleContainer: {
    width: '90%',
  },
});
