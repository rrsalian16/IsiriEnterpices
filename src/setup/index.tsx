import React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RouetName, RouteTypes} from '@Isiri/routes';

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
                onPress={() => navigation.navigate(RouetName.DETAILS)}
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
                onPress={() => navigation.navigate(RouetName.DETAILS)}
            />
        </View>
    );
}

const Stack = createNativeStackNavigator<RouteTypes.RootStackParamList>();

const Setup = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={RouetName.HOME}>
                <Stack.Screen name={RouetName.HOME} component={HomeScreen} />
                <Stack.Screen
                    name={RouetName.DETAILS}
                    component={DetailsScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Setup;
