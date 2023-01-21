import {RouetName} from '@Isiri/routes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
    [RouetName.HOME]: undefined;
    [RouetName.DETAILS]: undefined;
};

export type HomeScreenNavProps = NativeStackNavigationProp<
    RootStackParamList,
    RouetName.HOME
>;

export type DetailsScreenNavProps = NativeStackNavigationProp<
    RootStackParamList,
    RouetName.DETAILS
>;
