import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import DeviceInfo from 'react-native-device-info';
import {useForceUpdateApp} from '@Isiri/hooks';

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const version = DeviceInfo.getVersion();
    const buildNumber = DeviceInfo.getBuildNumber();

    const {forceUpdateVersion, isForceUpdateEnabled} = useForceUpdateApp();

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />

            <View
                style={{
                    backgroundColor: isDarkMode ? Colors.black : Colors.white,
                }}>
                <Text style={styles.highlight}>Version :{version}</Text>
                <Text style={styles.highlight}>
                    forceUpdateVersion :{forceUpdateVersion}
                </Text>
                <Text style={styles.highlight}>
                    isForceUpdateEnabled :{isForceUpdateEnabled + ''}
                </Text>
                <Text style={styles.highlight}>BuildNumber :{buildNumber}</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
