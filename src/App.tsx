import React from 'react';
import {StatusBar} from 'react-native';
import Navigator from '~/Screens/NavigatorStack';
import {UserContextProvider} from '~/Context/User';



const App = () => {
    return (
        <UserContextProvider>
            <StatusBar barStyle ="light-content" />
            <Navigator/>
        </UserContextProvider>
    );
};

export default App;
