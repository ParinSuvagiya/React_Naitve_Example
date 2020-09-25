import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Title, Caption, Drawer, Text, TouchableRipple, Switch } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function CustomDrawer(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <Text>Main Contant</Text>
            </DrawerContentScrollView>
            <Drawer.Section>
                <Drawer.Item
                    icon={({ color, size }) => (
                        <Icon name="exit-to-app"
                            color={color}
                            size={size} />
                    )}
                    label="sing out"
                    onPress={() => { }}
                />
            </Drawer.Section>
        </View>
    );
}

export default CustomDrawer;