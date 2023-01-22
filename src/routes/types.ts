import {
    CompositeNavigationProp,
    NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

import {RouetName} from '@Isiri/routes';

/******  Tab StackParam *****/
export type BottomTabPramList = {
    [RouetName.HOME_TAB]: NavigatorScreenParams<HomeStackParamList>;
    [RouetName.SETTING_TAB]: NavigatorScreenParams<SettingStackParamList>;
};

/******  Screen StackParams *****/
export type HomeStackParamList = {
    [RouetName.HOME]: undefined;
    [RouetName.DETAILS]: undefined;
};

export type SettingStackParamList = {
    [RouetName.PROFILE]: undefined;
    [RouetName.SETTING]: undefined;
};

/****** Tab Related StackType ******/
export type HomeTabNavProps = BottomTabNavigationProp<
    BottomTabPramList,
    RouetName.HOME_TAB
>;

export type SettingTabNavProps = BottomTabNavigationProp<
    BottomTabPramList,
    RouetName.SETTING_TAB
>;

/****** Screeen Related Type *******/

/* HomeTab Screen NavProps Type */
export type HomeScreenNavProps = CompositeNavigationProp<
    NativeStackNavigationProp<HomeStackParamList, RouetName.HOME>,
    BottomTabNavigationProp<BottomTabPramList, RouetName.HOME_TAB>
>;

export type DetailsScreenNavProps = CompositeNavigationProp<
    NativeStackNavigationProp<HomeStackParamList, RouetName.DETAILS>,
    BottomTabNavigationProp<BottomTabPramList, RouetName.HOME_TAB>
>;

/* SettingsTab Screen NavProps Type */
export type SettingScreenNavProps = CompositeNavigationProp<
    NativeStackNavigationProp<SettingStackParamList, RouetName.SETTING>,
    BottomTabNavigationProp<BottomTabPramList, RouetName.SETTING_TAB>
>;

export type ProfileScreenNavProps = CompositeNavigationProp<
    NativeStackNavigationProp<SettingStackParamList, RouetName.PROFILE>,
    BottomTabNavigationProp<BottomTabPramList, RouetName.SETTING_TAB>
>;
