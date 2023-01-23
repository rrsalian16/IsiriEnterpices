import React from 'react';

import {RouteName} from './routeName';
import * as RouteTypes from './types';
import {NavigationService} from './navigationService';
import BottomTabStack from './bottomTabStack';

const AppNavigator = () => {
    return <BottomTabStack />;
};

export default AppNavigator;
export {RouteName, RouteTypes, NavigationService};
