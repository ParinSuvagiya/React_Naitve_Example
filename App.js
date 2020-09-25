import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import Home from "./Component/Home";
import Detail from "./Component/Detail";
import Profile from "./Component/Profile";
import CustomDrawer from "./Component/CustomDrawer";
import BottomScreen from "./Component/BottomNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/FontAwesome5';

//const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStackScreen({ navigation }) {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
      <HomeStack.Screen name="Home" component={BottomScreen} options={{
        headerTitle: "Home",
        headerRight: () =>
          (<Icon.Button name="bars" backgroundColor='#f4511e' onPress={() => navigation.openDrawer()}></Icon.Button>)
      }} />
    </HomeStack.Navigator>
  );
}

function ProfileStackScreen({ navigation }) {
  return (
    <DetailStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
      <DetailStack.Screen name="Profile" component={Profile} options={{
        headerTitle: "Profile",
        headerRight: () =>
          (<Icon.Button name="bars" backgroundColor='#f4511e' onPress={() => navigation.openDrawer()}></Icon.Button>)
      }} />
    </DetailStack.Navigator>
  );
}
// Detail And Home stackScreen function is for nesting navigation 

function App() {
  return (
    //Stack navigator code
    //Drawer navigator code
    <NavigationContainer>
      {/*<Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
      you can not use two navigator in one navigationcontainer
      but nesting navigation use
      */}

      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Profile" component={ProfileStackScreen} />
      </Drawer.Navigator>

    </NavigationContainer>
  );
}

const style = StyleSheet.create({

});

export default App;


