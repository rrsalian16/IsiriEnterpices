import React from 'react';

import AppNavigator from '@Isiri/routes';
import {NavigationContainer} from '@react-navigation/native';

const Setup = () => {
    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    );
};

export default Setup;
