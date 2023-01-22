import React from 'react';

import {RouetName} from './routeName';
import * as RouteTypes from './types';
import BottomTabStack from './bottomTabStack';

const AppNavigator = () => {
    return <BottomTabStack />;
};

export default AppNavigator;
export {RouetName, RouteTypes};
