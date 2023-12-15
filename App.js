import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Persona from "./pages/persona";
import PersonaForm from './pages/persona/form';
import PersonaCreationSuccess from './pages/persona/success';
import Nudge from './pages/nudge';
import ScheduleSuccess from './pages/schedule/success';
import SchedulePlanner from './pages/schedule/planner';
import ScheduleViewer from './pages/schedule/Viewer';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
            name="Home"
            component={Persona}
            options={{ headerShown: false }}
          />
      <Stack.Screen
          name="SchedulePlanner"
          component={SchedulePlanner}
          options={{ headerShown: false }}
        />
      <Stack.Screen
          name="ScheduleSuccess"
          component={ScheduleSuccess}
          options={{ headerShown: false }}
        />
      <Stack.Screen
          name="ScheduleViewer"
          component={ScheduleViewer}
          options={{ headerShown: false }}
        />
      <Stack.Screen
          name="Nudge"
          component={Nudge}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PersonaForm"
          component={PersonaForm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PersonaCreationSuccess"
          component={PersonaCreationSuccess}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
