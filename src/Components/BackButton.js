import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Actions } from 'react-native-router-flux'
import { Images } from '../Resources/images/Images'
import PressableOpacity from './PressableOpacity'

export default function BackButton({ style }) {
    return (
        <PressableOpacity style={[style , {paddingLeft:wp(8) , top:hp(6), zIndex:99}]} onPress={() => Actions.pop()}>
            <Image source={Images.backButton} style = {{width:24 , height:16}} />
        </PressableOpacity>
    )
}
