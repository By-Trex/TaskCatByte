
 import {Session} from "../commons/Session";
//  import {Fonts} from "./Fonts";
 import {Platform} from "react-native";
 
 
 export const LightTheme = {
     buttonColor: "#FE5751",
     buttonColorGradient:["#f54f48","#f86c6c"],
     buttonDisabledColor:"rgba(0,0,0,0.3)",
     bottomNavigationColor:"#2e133b",
     chatMessageBackground:"#4c3c69",
     lineSeperatorColor:"#eaeaea",
      calendarTheme : () => {
         const themeColor = '#0059ff';
         const lightThemeColor = '#e6efff';
         const disabledColor = '#a6acb1';
         const black = '#20303c';
         const white = '#ffffff';
 
         return {
             // arrows
             arrowColor: black,
             arrowStyle: {padding: 0},
             // month
             monthTextColor: black,
             textMonthFontSize: 16,
            //  textMonthFontFamily:  Fonts.medium,
             textMonthFontWeight: 'bold',
             // day names
             textSectionTitleColor: black,
             textDayHeaderFontSize: 12,
            //  textDayHeaderFontFamily:  Fonts.medium,
             textDayHeaderFontWeight: 'normal',
             // today
             todayBackgroundColor: lightThemeColor,
             todayTextColor: themeColor,
             // dates
             dayTextColor: "black",
             textDayFontSize: 14,
            //  textDayFontFamily: Fonts.medium,
             textDayStyle: {marginTop: Platform.OS === 'android' ? 4 : 4},
             // selected date
             selectedDayBackgroundColor: getTheme().buttonColor,
             selectedDayTextColor: white,
             // disabled date
             textDisabledColor: disabledColor,
             // dot (marked date)
             dotColor: themeColor,
             selectedDotColor: white,
             disabledDotColor: disabledColor,
             dotStyle: {marginTop: -2}
         };
     }
 }
 
 export const DarkTheme = {
     buttonColor: "#00FF00",
     buttonColorGradient:["#00FF00","#f86c6c"],
     buttonDisabledColor:"rgba(255,255,255,.3)",
     bottomNavigationColor:"#2e133b",
     chatMessageBackground:"#4c3c69",
     lineSeperatorColor:"#eaeaea"
 
 
 }
 
 export const getTheme = ()=>{
     return LightTheme;
 }
 
 export const getThemeOpposite = ()=>{
     return DarkTheme;
 }
 
 