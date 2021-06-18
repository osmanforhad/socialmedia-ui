import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Posts from '../screens/Posts';

const Stack = createStackNavigator();

const screenOptionStyle={
    headerShown:false
}


const AppNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptionStyle}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Detail" component={Detail}/>
                <Stack.Screen name="Posts" component={Posts}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;