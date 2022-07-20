import React from "react";
import { Image, Text, View } from "react-native";
import PropStyles from "prop-types"
import PressableOpacity from "./PressableOpacity";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

//  import {getTheme, getThemeOpposite, LightTheme} from "../resources/Themes";
//  import {Fonts} from "../resources/Fonts";

const CustomButton = props => {

    return (
        <PressableOpacity disabled={props.disabled} {...props} style={[{
            marginHorizontal: wp(8),
            height: 60,
            borderRadius: 12,
            backgroundColor: props.backgroundColor ? props.backgroundColor : "#C9EC51",
            borderWidth: props.borderColor ? 1 : 0,
            borderColor: props.borderColor || "white",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
        }, props.style]} onPress={() => {
            props.onPress && props.onPress();
        }} >
            {props.icon &&
                <Image style={[{ width: 25, height: 25, tintColor: props.labelColor || "white", marginRight: 20 }, props.iconStyle]} source={props.icon} />
            }
            <Text style={[{
                color: props.labelColor || "#000000",
                fontFamily: props.fontFamily ? fontFamily : "poppinsSemiBold",
                fontSize: 16
            }]}>{props.label}</Text>
        </PressableOpacity>
    )
}

CustomButton.propTypes = {
    label: PropStyles.string,
    backgroundColor: PropStyles.string,
    labelColor: PropStyles.string,
    onPress: PropStyles.func,
    borderColor: PropStyles.string,
    labelStyle: PropStyles.object,
    disabledBackgroundColor: PropStyles.string,
    iconStyle: PropStyles.object,
    icon: PropStyles.any
}

export default CustomButton;
