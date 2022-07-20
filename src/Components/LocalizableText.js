
 import React, {useEffect, useState} from "react";
 import {Text, View} from "react-native";
 import PropStyles from "prop-types"
 import Language from "../resources/Language";
 import StyledText from "react-native-styled-text";
 
 const LocalizableText = props => {
 
     const [text, setText] = useState(props.text)
 
     const textWithVars = (text)=>{
         return stringf(text, {...props.vars, ...props});
     }
 
     useEffect(()=>{
         if (props.text) {
             setText(textWithVars(props.text))
         } else {
             Object.keys(props).forEach((key) => {
                 if (Language.localizable[key]) {
                     let text = Language.localizable[key];
                     setText(textWithVars(text))
                 }
             });
         }
     })
 
     function get(path, obj, fb = `$\{${path}}`) {
         return path.split('.').reduce((res, key) => res[key] || fb, obj);
     }
 
     function stringf(template, map, fallback) {
         return template.replace(/\$\{.+?}/g, (match) => {
             const path = match.substr(2, match.length - 3).trim();
             return get(path, map, fallback);
         });
     }
 
     return (
         <StyledText style={[{},props.style]}
                     textStyles={{color: {color: "blue"}}}>{text}</StyledText>
     )
 }
 LocalizableText.propTypes = {
     ...Language.localizable,
     text: PropStyles.string,
     label: PropStyles.string,
     color: PropStyles.string
 }
 
 export default LocalizableText;
 