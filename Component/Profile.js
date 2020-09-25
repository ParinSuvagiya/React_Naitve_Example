import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

function Profile() {
    return (
        <View style={style.div1}>
            <Text>Profile Screen</Text>
        </View>
    );
}

const style = StyleSheet.create({
    div1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Profile;