import React from "react";
import Home from "./Home";
import Detail from "./Detail"
import { View, Button, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

function BottomScreen() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#fff',
                style: {
                    backgroundColor: '#f4511e'
                },
                labelStyle: {
                    fontSize: 15
                }
            }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Detail" component={Detail} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="information" color={color} size={size} />
                ),
            }} />
        </Tab.Navigator>
    );
}

export default BottomScreen;