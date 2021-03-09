import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {ThemeContext, themes} from './config/theme-context';
import AppNavigator from './routes/AppNavigator';
import store from './store/configureStore';
import SplashScreen from 'react-native-splash-screen';
import {enableScreens} from 'react-native-screens';

enableScreens();

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <Provider store={store}>
      <ThemeContext.Provider value={themes.light}>
        <AppNavigator />
      </ThemeContext.Provider>
    </Provider>
  );
}
