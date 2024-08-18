import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import React, {Fragment} from 'react';
import {Avatar, Card} from '@rneui/base';
import {MyStatusBar} from '../../constants/config';
import {WHITE} from '../../constants/color';
import {appStyles} from '../../styles/AppStyles';
import Header from '../../components/Header';

const users = [
  {
    id: 1,
    name: 'John Doe',
    avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    description:
      'Software Engineer with 5 years of experience in web development.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    avatarUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
    description:
      'Graphic Designer specializing in brand identity and UX/UI design.',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    avatarUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
    description:
      'Product Manager with a passion for creating user-centric products.',
  },
  {
    id: 4,
    name: 'Bob Brown',
    avatarUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
    description:
      'Full-Stack Developer experienced in building scalable applications.',
  },
];

const UsersScreen = () => {
  return (
    <Fragment>
      <MyStatusBar backgroundColor={WHITE} barStyle={'dark-content'} />
      <Header icon={'arrow-back'} title={'Users'} />
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
            {users.map(user => (
              <Card
                containerStyle={{
                  width: '90%',
                }}
                key={user.id}>
                <View style={styles.cardContent}>
                  <Avatar
                    rounded
                    size="medium"
                    source={{
                      uri: user.avatarUrl,
                    }}
                  />
                  <View style={styles.textContainer}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.description}>{user.description}</Text>
                  </View>
                </View>
              </Card>
            ))}
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '90%',
  },
  cardContent: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
});

export default UsersScreen;
