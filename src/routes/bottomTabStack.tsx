import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {RouteName, RouteTypes} from '.';
import HomeStack from './homeStack';
import SettingStack from './settingStack';

const {Screen, Navigator} =
    createBottomTabNavigator<RouteTypes.BottomTabPramList>();

const BottomTabStack = () => {
    return (
        <Navigator
            initialRouteName={RouteName.HOME_TAB}
            screenOptions={{
                headerShown: false,
                // tabBarActiveBackgroundColor: 'pink',
            }}>
            <Screen name={RouteName.HOME_TAB} component={HomeStack} />
            <Screen name={RouteName.SETTING_TAB} component={SettingStack} />
        </Navigator>
    );
};

export default BottomTabStack;
