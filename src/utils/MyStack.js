import React from "react";
import Login from "../screens/login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/SignIn";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomTab from "./bottomTap";
import TransactionInfo from "../screens/TransactionInfo";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function MyStack({ user }) {
  return (
    <Stack.Navigator initialRouteName={user ? "Inside" : "Login"}>
      {user ? (
        <>
           <Stack.Screen
            name="Insisde"
            component={BottomTab}
            options={{ headerShown: false }}

          />
          <Stack.Screen
            name="TransactionInfo"
            component={TransactionInfo}
            options={{
              headerShown: true,
              headerTitle: "EcoFin",
            }}
            
          />
          
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
