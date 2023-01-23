import React, {useRef} from 'react';
import {
    NavigationContainer,
    NavigationContainerRef,
} from '@react-navigation/native';

import AppNavigator, {NavigationService, RouteName} from '@Isiri/routes';
import {NavigationRefType} from '@Isiri/routes/navigationService';

const Setup = () => {
    const navigationRef =
        useRef<NavigationContainerRef<typeof RouteName>>(null);

    const onNavigationMounted = () => {
        navigationRef.current &&
            NavigationService.setTopLevelNavigator(
                navigationRef as NavigationRefType,
            );
    };

    return (
        <NavigationContainer ref={navigationRef} onReady={onNavigationMounted}>
            <AppNavigator />
        </NavigationContainer>
    );
};

export default Setup;
