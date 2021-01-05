import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen316827Navigator from '../features/BlankScreen316827/navigator';
import Mapping116816Navigator from '../features/Mapping116816/navigator';
import Articles from '../features/ArticleListAndDetail216823/navigator'

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  Articles: { screen: Articles },

  //@BlueprintNavigationInsertion
BlankScreen316827: { screen: BlankScreen316827Navigator },
  Mapping116816: { screen: Mapping116816Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
