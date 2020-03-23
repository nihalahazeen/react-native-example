import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import About from '../screens/About'
import Feed from '../screens/Feed'
import Profile from '../screens/Profile'

const AppNavigator= createDrawerNavigator(
  { Home: createStackNavigator(
    { Feed: { screen: Feed,
      path: '../screens/Feed.js'},
      Profile: { screen: Profile,
      path: '../screens/Profile.js'},
    },
    {
      initialRouteName: 'Feed',
      headerMode: 'none'
    }),
    About: {screen: About},
  },
)
  export default AppContainer = createAppContainer(AppNavigator);