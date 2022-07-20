import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Actions } from 'react-native-router-flux'
import { Images } from '../Resources/images/Images'
import { TranslationsTR } from '../Resources/Translations/TranslationTr'
import PressableOpacity from './PressableOpacity'


export default function UnderLeft(props) {
  return (
    props.type ?
      <PressableOpacity
        style={{ paddingLeft: wp(9) }}
        onPress={() => Actions.pop()}>
        <Text style={{ textDecorationLine: "underline", fontFamily: "poppinsRegular" }}>{TranslationsTR.underlineSkipButton}</Text>
      </PressableOpacity> :
      <PressableOpacity
        style={{ paddingLeft: wp(9) }}
        onPress={() => Actions.pop()}>
        <Text style={{ textDecorationLine: "underline", fontFamily: "poppinsRegular" }}>{TranslationsTR.underlineBackButton}</Text>
      </PressableOpacity>
  )
}