import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import DeviceInfo from 'react-native-device-info';
import {useForceUpdateApp} from '@Isiri/hooks';
import Config from 'react-native-config';

const App = () => {
    const version = DeviceInfo.getVersion();
    const buildNumber = DeviceInfo.getBuildNumber();

    const {forceUpdateVersion, isForceUpdateEnabled} = useForceUpdateApp();

    return (
        <SafeAreaView>
            <View>
                <Text>Version :{version}</Text>
                <Text>forceUpdateVersion :{forceUpdateVersion}</Text>
                <Text>isForceUpdateEnabled :{isForceUpdateEnabled + ''}</Text>
                <Text>BuildNumber :{buildNumber}</Text>
                <Text>BuildNumber :{JSON.stringify(Config)}</Text>
            </View>
        </SafeAreaView>
    );
};

export default App;
