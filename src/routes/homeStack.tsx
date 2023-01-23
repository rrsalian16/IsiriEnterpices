import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RouteName, RouteTypes} from '@Isiri/routes';

function HomeScreen() {
    const navigation: RouteTypes.HomeScreenNavProps = useNavigation();
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Text>Home Screen</Text>
            <Button
                title='Go to Details'
                onPress={() => navigation.navigate(RouteName.DETAILS)}
            />
            <Button
                title='Go to Settings'
                onPress={() =>
                    navigation.navigate(RouteName.SETTING_TAB, {
                        screen: RouteName.SETTING,
                    })
                }
            />
            <Button
                title='Go to Profile'
                onPress={() =>
                    navigation.navigate(RouteName.SETTING_TAB, {
                        screen: RouteName.PROFILE,
                    })
                }
            />
        </View>
    );
}

type DetailsScreenProps = {navigation: RouteTypes.DetailsScreenNavProps};

function DetailsScreen({navigation}: DetailsScreenProps) {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Text>Details Screen</Text>
            <Button
                title='Go to Details... again'
                onPress={() => navigation.navigate(RouteName.DETAILS)}
            />
            <Button
                title='Go to HOME'
                onPress={() => navigation.navigate(RouteName.HOME)}
            />

            <Button
                title='Go to Settings'
                onPress={() =>
                    navigation.navigate(RouteName.SETTING_TAB, {
                        screen: RouteName.SETTING,
                    })
                }
            />
            <Button
                title='Go to Profile'
                onPress={() =>
                    navigation.navigate(RouteName.SETTING_TAB, {
                        screen: RouteName.PROFILE,
                    })
                }
            />
        </View>
    );
}

const Stack = createNativeStackNavigator<RouteTypes.HomeStackParamList>();

const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName={RouteName.HOME}>
            <Stack.Screen name={RouteName.HOME} component={HomeScreen} />
            <Stack.Screen name={RouteName.DETAILS} component={DetailsScreen} />
        </Stack.Navigator>
    );
};

export default HomeStack;
