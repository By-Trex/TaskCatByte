import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Checkbox from 'expo-checkbox';
import { TranslationsTR } from '../Resources/Translations/TranslationTr'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
export default function CheckBoxx(props) {
  return (
    <View style={{ flexDirection: "row" }}>
      <Checkbox
        value={props.value}
        onValueChange={props.onValueChange}
        style={{ borderRadius:5 ,marginLeft:wp(2) }}
        color={'black'}

      />
      <Text style={styles.remembermeText}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  remembermeText: {
    marginHorizontal: 10,
    fontFamily: "poppinsMedium",
    fontSize: 12
  },
})