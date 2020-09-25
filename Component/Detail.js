import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

function Detail() {
    return (
        <View style={style.div1}>
            <Text>Detail Screen</Text>
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

export default Detail;