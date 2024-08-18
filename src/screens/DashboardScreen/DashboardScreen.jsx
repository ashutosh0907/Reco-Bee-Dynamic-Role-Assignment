import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import React, {Fragment} from 'react';
import {HEIGHT, MyStatusBar} from '../../constants/config';
import {BLACK, BRAND, LIGHTGRAY, WHITE} from '../../constants/color';
import {appStyles} from '../../styles/AppStyles';
import {Card, Button, Icon} from '@rneui/base';
import Header from '../../components/Header';
import {RFValue} from 'react-native-responsive-fontsize';

const DashboardScreen = () => {
  return (
    <Fragment>
      <MyStatusBar backgroundColor={WHITE} barStyle={'light-content'} />
      <Header icon={'arrow-back'} title={'Dashboard'} />
      <SafeAreaView style={appStyles.safeareacontainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <ScrollView
            keyboardShouldPersistTaps={'handled'}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContent}>
            {/* Overview Cards */}
            <View style={styles.cardContainer}>
              <Card containerStyle={styles.card}>
                <Icon
                  name="users"
                  type="font-awesome"
                  color="#517fa4"
                  size={40}
                />
                <Text style={styles.cardTitle}>Users</Text>
                <Text style={styles.cardNumber}>1,234</Text>
                <Button title="View Details" type="clear" />
              </Card>

              <Card containerStyle={styles.card}>
                <Icon
                  name="chart-line"
                  type="font-awesome-5"
                  color="#517fa4"
                  size={40}
                />
                <Text style={styles.cardTitle}>Revenue</Text>
                <Text style={styles.cardNumber}>$45,678</Text>
                <Button title="View Details" type="clear" />
              </Card>

              <Card containerStyle={styles.card}>
                <Icon
                  name="tasks"
                  type="font-awesome"
                  color="#517fa4"
                  size={40}
                />
                <Text style={styles.cardTitle}>Tasks</Text>
                <Text style={styles.cardNumber}>12</Text>
                <Button title="View Details" type="clear" />
              </Card>
            </View>
            {/* Welcome Banner */}
            <View style={styles.bannerContainer}>
              <Text style={styles.sectionTitle}>Welcome to the Dashboard</Text>
              <Image
                source={{
                  uri: 'https://previews.123rf.com/images/funtap/funtap1907/funtap190700455/127310101-website-banner-investment-dashboard-diagram-graph-stock-trading-transparent-business-background.jpg',
                }}
                style={styles.bannerImage}
              />
            </View>
            {/* Recent Activity Section */}
            <View style={styles.activityContainer}>
              <Text style={styles.sectionTitle}>Recent Activity</Text>
              <View style={styles.activityItem}>
                <Icon
                  name="check-circle"
                  type="font-awesome"
                  color="green"
                  size={20}
                />
                <Text style={styles.activityText}>
                  User John Doe completed the task.
                </Text>
              </View>
              <View style={styles.activityItem}>
                <Icon
                  name="check-circle"
                  type="font-awesome"
                  color="green"
                  size={20}
                />
                <Text style={styles.activityText}>
                  Revenue target reached for Q2.
                </Text>
              </View>
              <View style={styles.activityItem}>
                <Icon
                  name="exclamation-circle"
                  type="font-awesome"
                  color="red"
                  size={20}
                />
                <Text style={styles.activityText}>
                  3 pending tasks overdue.
                </Text>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  bannerContainer: {
    width: '100%',
    marginBottom: 20,
  },
  bannerImage: {
    borderWidth: 0.2,
    width: '100%',
    height: HEIGHT * 0.14,
    resizeMode: 'stretch',
  },
  bannerText: {
    marginTop: 10,
    fontSize: RFValue(15),
    fontWeight: 'bold',
    textAlign: 'left',
    color: BLACK,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
    padding: 20,
  },
  cardTitle: {
    fontSize: RFValue(13),
    textAlign: 'center',
    marginTop: 10,
    color: BLACK,
  },
  cardNumber: {
    fontSize: RFValue(15),
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: LIGHTGRAY,
  },
  activityContainer: {
    width: '100%',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: RFValue(15),
    fontWeight: 'bold',
    marginBottom: 10,
    color: BLACK,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  activityText: {
    marginLeft: 10,
    fontSize: RFValue(13),
  },
});

export default DashboardScreen;
