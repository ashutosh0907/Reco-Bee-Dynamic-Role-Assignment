import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useSelector} from 'react-redux';
import UsersScreen from '../screens/UsersScreen/UsersScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import DraftsScreen from '../screens/DraftsScreen/DraftsScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import ExploreScreen from '../screens/ExploreScreen/ExploreScreen';
import FallbackScreen from '../screens/FallbackScreen/FallbackScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DashboardScreen from '../screens/DashboardScreen/DashboardScreen';
import {Icon} from '@rneui/base';
import PostsScreen from '../screens/PostsScreen/PostsScreen';
import FavouritesScreen from '../screens/FavouritesScreen/FavouritesScreen';
import {Fragment} from 'react';
import AnalyticsScreen from '../screens/AnalyticsScreen/AnalyticsScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const AdminTabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <Icon name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <Icon name="dashboard" color={color} size={size} />
        ),
      }}
      name="Dashboard"
      component={DashboardScreen}
    />
    <Tab.Screen
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <Icon name="people" color={color} size={size} />
        ),
      }}
      name="Users"
      component={UsersScreen}
    />
    <Tab.Screen
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <Icon name="settings" color={color} size={size} />
        ),
      }}
      name="Settings"
      component={SettingsScreen}
    />
  </Tab.Navigator>
);

const EditorTabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <Icon name="home" color={color} size={size} />
        ),
      }}
      name="Home"
      component={HomeScreen}
    />
    <Tab.Screen
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <Icon name="add" color={color} size={size} />
        ),
      }}
      name="Posts"
      component={PostsScreen}
    />
    <Tab.Screen
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <Icon name="drafts" color={color} size={size} />
        ),
      }}
      name="Drafts"
      component={DraftsScreen}
    />
    <Tab.Screen
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <Icon name="settings" color={color} size={size} />
        ),
      }}
      name="Settings"
      component={SettingsScreen}
    />
  </Tab.Navigator>
);

const ViewerTabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <Icon name="home" color={color} size={size} />
        ),
      }}
      name="Home"
      component={HomeScreen}
    />
    <Tab.Screen
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <Icon name="explore" color={color} size={size} />
        ),
      }}
      name="Explore"
      component={ExploreScreen}
    />
    <Tab.Screen
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <Icon name="favorite" color={color} size={size} />
        ),
      }}
      name="Favorites"
      component={FavouritesScreen}
    />
    <Tab.Screen
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <Icon name="person" color={color} size={size} />
        ),
      }}
      name="Profile"
      component={ProfileScreen}
    />
  </Tab.Navigator>
);

const AppNavigator = () => {
  const role = useSelector(state => state.role);

  console.log('User Role:', role);

  return (
    <Drawer.Navigator>
      {role === 'Admin' && (
        <Fragment>
          <Drawer.Screen
            options={{headerShown: false}}
            name="Admin Tabs"
            component={AdminTabs}
          />
          <Drawer.Screen
            options={{headerShown: false}}
            name="Dashboard"
            component={DashboardScreen}
          />
          <Drawer.Screen
            options={{headerShown: false}}
            name="Users"
            component={UsersScreen}
          />
          <Drawer.Screen
            options={{headerShown: false}}
            name="Analytics"
            component={AnalyticsScreen}
          />
          <Drawer.Screen
            options={{headerShown: false}}
            name="Settings"
            component={SettingsScreen}
          />
        </Fragment>
      )}
      {role === 'Editor' && (
        <Fragment>
          <Drawer.Screen
            options={{headerShown: false}}
            name="Editor Tabs"
            component={EditorTabs}
          />
          <Drawer.Screen
            options={{headerShown: false}}
            name="Drafts"
            component={DraftsScreen}
          />
          <Drawer.Screen
            options={{headerShown: false}}
            name="Posts"
            component={PostsScreen}
          />
          <Drawer.Screen
            options={{headerShown: false}}
            name="Settings"
            component={SettingsScreen}
          />
        </Fragment>
      )}
      {role === 'Viewer' && (
        <Fragment>
          <Drawer.Screen
            options={{headerShown: false}}
            name="Viewer Tabs"
            component={ViewerTabs}
          />
          <Drawer.Screen
            options={{headerShown: false}}
            name="Explore"
            component={ExploreScreen}
          />
          <Drawer.Screen
            options={{headerShown: false}}
            name="Favourites"
            component={FavouritesScreen}
          />
          <Drawer.Screen
            options={{headerShown: false}}
            name="Profile"
            component={ProfileScreen}
          />
          <Drawer.Screen
            options={{headerShown: false}}
            name="Settings"
            component={SettingsScreen}
          />
        </Fragment>
      )}
      {role !== 'Admin' && role !== 'Editor' && role !== 'Viewer' && (
        <Drawer.Screen
          options={{headerShown: false}}
          name="Fallback"
          component={FallbackScreen}
        />
      )}
    </Drawer.Navigator>
  );
};

export default AppNavigator;
