import React from 'react'
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Actions } from 'react-native-router-flux'
import { Images } from '../Resources/images/Images'

export default function GoToButton(props) {
    return (
        <TouchableOpacity style={[props.style, { right: wp(8) }]} onPress={ props.onPress}>
            <Image source={Images.goto_icon} style={{ width: 50, height: 50 }} />
        </TouchableOpacity>
    )
}
