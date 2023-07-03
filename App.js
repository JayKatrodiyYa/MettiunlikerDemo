import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import configureStore from './src/redux/configureStore';
import StackNavigation from './src/navigation/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <Provider store={configureStore}>
            <NavigationContainer>
                <StackNavigation />
            </NavigationContainer>
        </Provider>
    )
}

export default App;
