import {
    CompositeNavigationProp,
    NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

import {RouteName} from '@Isiri/routes';

/******  Tab StackParam *****/
export type BottomTabPramList = {
    [RouteName.HOME_TAB]: NavigatorScreenParams<HomeStackParamList>;
    [RouteName.SETTING_TAB]: NavigatorScreenParams<SettingStackParamList>;
};

/******  Screen StackParams *****/
export type HomeStackParamList = {
    [RouteName.HOME]: undefined;
    [RouteName.DETAILS]: undefined;
};

export type SettingStackParamList = {
    [RouteName.PROFILE]: undefined;
    [RouteName.SETTING]: undefined;
};

/****** Tab Related StackType ******/
export type HomeTabNavProps = BottomTabNavigationProp<
    BottomTabPramList,
    RouteName.HOME_TAB
>;

export type SettingTabNavProps = BottomTabNavigationProp<
    BottomTabPramList,
    RouteName.SETTING_TAB
>;

/****** Screeen Related Type *******/

/* HomeTab Screen NavProps Type */
export type HomeScreenNavProps = CompositeNavigationProp<
    NativeStackNavigationProp<HomeStackParamList, RouteName.HOME>,
    BottomTabNavigationProp<BottomTabPramList, RouteName.HOME_TAB>
>;

export type DetailsScreenNavProps = CompositeNavigationProp<
    NativeStackNavigationProp<HomeStackParamList, RouteName.DETAILS>,
    BottomTabNavigationProp<BottomTabPramList, RouteName.HOME_TAB>
>;

/* SettingsTab Screen NavProps Type */
export type SettingScreenNavProps = CompositeNavigationProp<
    NativeStackNavigationProp<SettingStackParamList, RouteName.SETTING>,
    BottomTabNavigationProp<BottomTabPramList, RouteName.SETTING_TAB>
>;

export type ProfileScreenNavProps = CompositeNavigationProp<
    NativeStackNavigationProp<SettingStackParamList, RouteName.PROFILE>,
    BottomTabNavigationProp<BottomTabPramList, RouteName.SETTING_TAB>
>;
