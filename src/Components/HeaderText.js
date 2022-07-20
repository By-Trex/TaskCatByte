import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function HeaderText({ headerTextStyle, headerText, headerViewStyle }) {
    return (
        <View style={headerViewStyle}>
            <Text style={[headerTextStyle, styles.headerTextStyle2]}>{headerText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerTextStyle2: {
        color: "#000000",
        fontSize: 32,
        fontFamily: "poppinsSemiBold"
    }

})
