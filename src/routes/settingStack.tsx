import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RouteName, RouteTypes} from '@Isiri/routes';

function SettingScreen() {
    const navigation: RouteTypes.SettingScreenNavProps = useNavigation();
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Text>Setting Screen</Text>
            <Button
                title='Got to PROFILE'
                onPress={() => navigation.navigate(RouteName.PROFILE)}
            />
            <Button
                title='Got to Home'
                onPress={() =>
                    navigation.navigate(RouteName.HOME_TAB, {
                        screen: RouteName.HOME,
                    })
                }
            />
            <Button
                title='Got to HomeTab'
                onPress={() =>
                    navigation.navigate(RouteName.HOME_TAB, {
                        screen: RouteName.HOME,
                    })
                }
            />
            <Button
                title='Got to Details'
                onPress={() =>
                    navigation.navigate(RouteName.HOME_TAB, {
                        screen: RouteName.DETAILS,
                    })
                }
            />
        </View>
    );
}

export function ProfileScreen() {
    const navigation: RouteTypes.ProfileScreenNavProps = useNavigation();
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Text>Profile Screen</Text>
            <Button
                title='Got to Settings'
                onPress={() => navigation.navigate(RouteName.SETTING)}
            />
            <Button
                title='Got to Home'
                onPress={() =>
                    navigation.navigate(RouteName.HOME_TAB, {
                        screen: RouteName.HOME,
                    })
                }
            />
            <Button
                title='Got to Details'
                onPress={() =>
                    navigation.navigate(RouteName.HOME_TAB, {
                        screen: RouteName.DETAILS,
                    })
                }
            />
            <Button title='Got back' onPress={() => navigation.goBack()} />
        </View>
    );
}

const Stack = createNativeStackNavigator<RouteTypes.SettingStackParamList>();

const SettingStack = () => {
    return (
        <Stack.Navigator initialRouteName={RouteName.SETTING}>
            <Stack.Screen name={RouteName.SETTING} component={SettingScreen} />
            <Stack.Screen name={RouteName.PROFILE} component={ProfileScreen} />
        </Stack.Navigator>
    );
};

export default SettingStack;
