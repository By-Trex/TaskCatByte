import { View, Text, TextInput, StyleSheet, Image } from 'react-native'
import React from 'react'
import InputField from './InputField'
import Language from '../Resources/data/LanguageData'
import { TranslationsTR } from '../Resources/Translations/TranslationTr'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Images } from '../Resources/images/Images'
import PressableOpacity from './PressableOpacity'

export default function SearchBar(props) {
    return (
        <View style={{ justifyContent: "center" }}>
            {
                props.logo &&
                <Image
                    style={styles.imageStyle}
                    source={Images.mainsearch} />

            }
            <TextInput
                style={styles.textInputStyle}
                onChangeText={(item) => props.onChangeNumber(item)}
                // value={number}
                placeholder={TranslationsTR.main_search}
                keyboardType="ascii-capable"
            />
            {
                props.sort &&
                <PressableOpacity style = {styles.sortStyle}>
                    <Image
                        style={styles.sortStyle}
                        source={Images.sorticon} />
                </PressableOpacity>


            }
        </View>
    )
}


const styles = StyleSheet.create({
    textInputStyle: {
        width: wp(85),
        borderRadius: 12,
        borderColor: "#F9F9F9",
        left: 15,
        height: 42,
        borderWidth: 1,
        paddingLeft: 40,
    },
    imageStyle: {
        position: "absolute",
        width: 15,
        height: 15,
        left: 30
    },
    sortStyle: {
        position: "absolute",
        width: 20,
        height: 16,
        alignSelf: "flex-end",
        right: 5
    }

})