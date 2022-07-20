import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function InputField(props) {
    return (

        <View style={{}}>
            {/* {description} ?
   <Text>InputField</Text> */}
            <Text style={{
                top: props.top - 5,
                marginHorizontal: wp(8),
                fontFamily: "poppinsSemiBold",
                fontSize: 14
            }}>{props.topText}</Text>
            <TextInput
                style={{
                    height: 60,
                    borderWidth: 2,
                    padding: 18,
                    borderRadius: 12,
                    top: props.top ? props.top : null,
                    marginHorizontal: wp(8),
                    borderColor: "#A5A4A9",
                }}
                onChangeText={props.onChangeText}
                // value={number}
                editable={props.editable}
                placeholder={props.placeholder}
                keyboardType={props.keyboardType ? "visible-password" : "email-address"}
                pointerEvents = {props.pointerEvents}
            />

        </View>
    )
}