import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
    HOME: undefined;
    DETAILS: undefined;
};

export type HomeScreenNavProps = NativeStackNavigationProp<
    RootStackParamList,
    'HOME'
>;

export type DetailsScreenNavProps = NativeStackNavigationProp<
    RootStackParamList,
    'DETAILS'
>;
