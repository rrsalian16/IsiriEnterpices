import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {RouetName, RouteTypes} from '.';
import HomeStack from './homeStack';
import SettingStack from './settingStack';

const {Screen, Navigator} =
    createBottomTabNavigator<RouteTypes.BottomTabPramList>();

const BottomTabStack = () => {
    return (
        <Navigator
            initialRouteName={RouetName.HOME_TAB}
            screenOptions={{
                headerShown: false,
                // tabBarActiveBackgroundColor: 'pink',
            }}>
            <Screen name={RouetName.HOME_TAB} component={HomeStack} />
            <Screen name={RouetName.SETTING_TAB} component={SettingStack} />
        </Navigator>
    );
};

export default BottomTabStack;
