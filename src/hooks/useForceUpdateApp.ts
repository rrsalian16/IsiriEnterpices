import {useEffect, useState} from 'react';
import remoteConfig from '@react-native-firebase/remote-config';

const DEFAULT_VERSION = '0.0.0';
const FORCE_UPDATE_VERSION_KEY = 'forceUpdateVersion';
const IS_FORCE_UPDATE_ENABLED_KEY = 'isForceUpdateEnabled';

const useForceUpdateApp = () => {
    const [forceUpdateState, setForceUpdateState] = useState({
        forceUpdateVersion: DEFAULT_VERSION,
        isForceUpdateEnabled: false,
    });

    const getRemoteConfig = async () => {
        try {
            await remoteConfig().fetchAndActivate();
            const forceUpdateVersion = remoteConfig()
                .getValue(FORCE_UPDATE_VERSION_KEY)
                .asString();
            const isForceUpdateEnabled = remoteConfig()
                .getValue(IS_FORCE_UPDATE_ENABLED_KEY)
                .asBoolean();
            setForceUpdateState({forceUpdateVersion, isForceUpdateEnabled});
        } catch (error) {
            console.log('remoteConfig Error:: ', error);
        }
    };

    useEffect(() => {
        getRemoteConfig();
    }, []);

    return forceUpdateState;
};

export default useForceUpdateApp;
