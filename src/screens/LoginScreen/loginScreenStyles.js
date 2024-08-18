import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {WHITE} from '../../constants/color';
import {HEIGHT, WIDTH} from '../../constants/config';

export const loginScreenStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headText: {
    fontSize: RFValue(20),
  },
  headSubText: {
    fontSize: RFValue(25),
    fontWeight: 'bold',
  },
});
