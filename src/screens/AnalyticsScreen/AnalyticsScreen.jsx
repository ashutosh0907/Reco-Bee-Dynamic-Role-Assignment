import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import React, {Fragment} from 'react';
import {BRAND, WHITE} from '../../constants/color';
import {HEIGHT, MyStatusBar} from '../../constants/config';
import {RFValue} from 'react-native-responsive-fontsize';
import {appStyles} from '../../styles/AppStyles';
import {Loader} from '../../components/Loader';
import Header from '../../components/Header';

const AnalyticsScreen = () => {
  const AnalyticsCard = ({title, figure}) => {
    return (
      <View style={styles.statCard}>
        <Text style={styles.statTitle}>{title}</Text>
        <Text style={styles.statValue}>{figure}</Text>
      </View>
    );
  };
  return (
    <Fragment>
      <MyStatusBar backgroundColor={WHITE} barStyle={'dark-content'} />
      <Header icon={'arrow-back'} title={'Analytics'} />
      <SafeAreaView style={appStyles.safeareacontainer}>
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
            <AnalyticsCard title={'Total Users'} figure={'1,234'} />
            <AnalyticsCard title={'Active Users'} figure={'567'} />
            <AnalyticsCard title={'New Signups'} figure={'89'} />
            <View style={styles.chartPlaceholder}>
              <Image
                source={{
                  uri: 'https://quickchart.io/chart?bkg=white&c={type:%27bar%27,data:{labels:[%27Q1%27,%27Q2%27,%27Q3%27,%27Q4%27],%20datasets:[{label:%27Users%27,data:[50,60,70,180]},{label:%27Revenue%27,data:[100,200,300,400]}]}}',
                }}
                style={styles.chartImage}
                resizeMode="stretch"
              />
            </View>
            <AnalyticsCard title={'Bounce Rate'} figure={'23.45%'} />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: WHITE,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  statCard: {
    backgroundColor: BRAND,
    width: '90%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  statTitle: {
    fontSize: RFValue(13),
    color: WHITE,
  },
  statValue: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 5,
    color: WHITE,
  },
  chartPlaceholder: {
    marginVertical: HEIGHT * 0.02,
    width: '90%',
    height: HEIGHT * 0.25,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.3,
  },
  chartText: {
    fontSize: 16,
    color: '#888',
  },
  chartImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
});

export default AnalyticsScreen;
