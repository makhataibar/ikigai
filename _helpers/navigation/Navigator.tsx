import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { screens } from "./screens";

const Stack = createStackNavigator();

export const Navigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="CreateTask">
      {screens.map(screen => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={screen.options}
        />
      ))}
    </Stack.Navigator>
  </NavigationContainer>
);
