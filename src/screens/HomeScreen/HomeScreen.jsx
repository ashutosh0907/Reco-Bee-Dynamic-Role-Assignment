// import React, {Fragment, useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
// } from 'react-native';
// import {useSelector} from 'react-redux';
// import {MyStatusBar} from '../../constants/config';
// import {Loader} from '../../components/Loader';
// import {appStyles} from '../../styles/AppStyles';
// import {WHITE} from '../../constants/color';
// import Header from '../../components/Header';
// import {HAMBURGER} from '../../constants/imagepath';
// import LatestPosts from './_blocks/LatestPosts';

// const HomeScreen = ({navigation}) => {
//   const role = useSelector(state => state.role);
//   const [content, setContent] = useState([]);
//   const [loader, setLoader] = useState(false);

//   useEffect(() => {
//     if (role === 'Admin') {
//       setContent(['Latest Posts', 'Analytics Overview', 'User Activity']);
//     } else if (role === 'Editor') {
//       setContent(['Drafts', 'Latest Posts', 'Popular Content']);
//     } else {
//       setContent(['Recommended for You', 'Popular Content', 'Favorites']);
//     }
//   }, [role]);

//   return (
//     <Fragment>
//       <MyStatusBar backgroundColor={WHITE} barStyle={'light-content'} />
//       <SafeAreaView style={appStyles.safeareacontainer}>
//         <Loader visible={loader} />
//         <Header
//           icon={HAMBURGER}
//           onIconPress={() => {
//             navigation.openDrawer();
//           }}
//           title={role}
//         />
//         <KeyboardAvoidingView
//           behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//           style={{flex: 1}}>
//           <ScrollView
//             keyboardShouldPersistTaps={'handled'}
//             showsVerticalScrollIndicator={false}
//             contentContainerStyle={{
//               flexGrow: 1,
//               alignItems: 'center',
//             }}>
//             <LatestPosts />
//           </ScrollView>
//         </KeyboardAvoidingView>
//       </SafeAreaView>
//     </Fragment>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default HomeScreen;

import React, {Fragment, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useSelector} from 'react-redux';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {MyStatusBar} from '../../constants/config';
import {Loader} from '../../components/Loader';
import {appStyles} from '../../styles/AppStyles';
import {BLACK, WHITE} from '../../constants/color';
import Header from '../../components/Header';
import {HAMBURGER} from '../../constants/imagepath';
import LatestPosts from './_blocks/LatestPosts';
import {RFValue} from 'react-native-responsive-fontsize';
import AnalyticsScreen from '../AnalyticsScreen/AnalyticsScreen';
import UsersScreen from '../UsersScreen/UsersScreen';
import DraftsScreen from '../DraftsScreen/DraftsScreen';
import PopularContentsScreen from '../PopularContentsScreen/PopularContentsScreen';
import RecommendedForYou from './_blocks/RecommendedForYou';
import FavouritesScreen from '../FavouritesScreen/FavouritesScreen';

const HomeScreen = ({navigation}) => {
  const role = useSelector(state => state.role);
  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (role === 'Admin') {
      setRoutes([
        {key: 'latestPosts', title: 'Latest Posts'},
        {key: 'analytics', title: 'Analytics Overview'},
        {key: 'userActivity', title: 'User Activity'},
      ]);
    } else if (role === 'Editor') {
      setRoutes([
        {key: 'drafts', title: 'Drafts'},
        {key: 'latestPosts', title: 'Latest Posts'},
        {key: 'popularContent', title: 'Popular Content'},
      ]);
    } else {
      setRoutes([
        {key: 'recommended', title: 'Recommended for You'},
        {key: 'popularContent', title: 'Popular Content'},
        {key: 'favorites', title: 'Favorites'},
      ]);
    }
  }, [role]);

  const renderScene = SceneMap({
    latestPosts: LatestPosts,
    analytics: AnalyticsScreen,
    userActivity: UsersScreen,
    drafts: DraftsScreen,
    popularContent: PopularContentsScreen,
    recommended: RecommendedForYou,
    favorites: FavouritesScreen,
  });

  return (
    <Fragment>
      <MyStatusBar backgroundColor={WHITE} barStyle={'light-content'} />
      <SafeAreaView style={appStyles.safeareacontainer}>
        <Loader visible={loader} />
        <Header
          icon={'menu'}
          onIconPress={() => {
            navigation.openDrawer();
          }}
          title={role}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            // initialLayout={initialLayout}
            renderTabBar={props => (
              <TabBar
                {...props}
                labelStyle={{
                  color: WHITE,
                  fontWeight: '600',
                  fontSize: RFValue(9.5),
                }}
                indicatorStyle={{
                  backgroundColor: WHITE,
                  height: 3,
                  borderRadius: 3,
                }}
                style={{backgroundColor: BLACK}}
              />
            )}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
