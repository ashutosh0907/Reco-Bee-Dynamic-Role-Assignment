import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
} from 'react-native';
import React, {Fragment} from 'react';
import {MyStatusBar, WIDTH} from '../../constants/config';
import Header from '../../components/Header';
import {appStyles} from '../../styles/AppStyles';
import {Loader} from '../../components/Loader';
import {BLACK, BRAND, LIGHTGRAY, WHITE} from '../../constants/color';
import {Card, Button, Icon} from '@rneui/base';
import {RFValue} from 'react-native-responsive-fontsize';

const DraftsScreen = () => {
  const drafts = [
    {
      title: 'React Native UI Improvements',
      description:
        'Discuss potential improvements for the UI components used in the app.',
      date: '2024-08-01',
    },
    {
      title: 'Marketing Strategy for Q4',
      description:
        'Outline the key marketing strategies to implement in the next quarter.',
      date: '2024-07-25',
    },
    {
      title: 'Feature List for v2.0 Release',
      description:
        'A draft list of new features to include in the upcoming major release.',
      date: '2024-07-15',
    },
  ];

  return (
    <Fragment>
      <MyStatusBar backgroundColor={WHITE} barStyle={'dark-content'} />
      <Header icon={'arrow-back'} title={'Drafts'} />
      <SafeAreaView style={appStyles.safeareacontainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <ScrollView
            keyboardShouldPersistTaps={'handled'}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContent}>
            {/* Display Drafts */}
            {drafts.map((draft, index) => (
              <Card containerStyle={styles.card} key={index}>
                <Card.Title
                  style={{
                    textAlign: 'left',
                    color: BRAND,
                    fontSize: RFValue(12),
                  }}>
                  {draft.title}
                </Card.Title>
                <Card.Divider />
                <Text style={styles.draftDescription}>{draft.description}</Text>
                <View style={styles.draftFooter}>
                  <Text style={styles.draftDate}>{draft.date}</Text>
                  <Button
                    title="Edit"
                    titleStyle={{
                      color: WHITE,
                      fontSize: RFValue(13),
                      fontWeight: '400',
                    }}
                    icon={
                      <Icon
                        size={WIDTH * 0.05}
                        name="edit"
                        type="font-awesome"
                        color="#ffffff"
                      />
                    }
                    buttonStyle={styles.editButton}
                  />
                </View>
              </Card>
            ))}

            {/* Add New Draft Button */}
            <Button
              titleStyle={{
                color: WHITE,
                fontSize: RFValue(13),
                fontWeight: 'bold',
              }}
              title="Create New Draft"
              icon={<Icon name="add" color={WHITE} />}
              buttonStyle={styles.newDraftButton}
            />
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
  card: {
    width: '100%',
    borderRadius: 2,
    marginBottom: 20,
  },
  draftDescription: {
    marginBottom: 10,
    fontSize: RFValue(14),
    color: LIGHTGRAY,
  },
  draftFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  draftDate: {
    color: BLACK,
    fontSize: RFValue(11),
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: BLACK,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  newDraftButton: {
    backgroundColor: BLACK,
    marginTop: 20,
    paddingHorizontal: 20,
  },
});

export default DraftsScreen;
