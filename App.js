import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import ReduxThunk from "redux-thunk"
import Router from './src/Router'
import reducers from './src/Reducers'
import { ModalPortal } from 'react-native-modals';
import * as firebase from 'firebase';
// import { Fonts } from './src/Resources/fonts/font'
import * as Font from 'expo-font';


export default class App extends Component {

  state = {
    fontsLoaded: false
  }

  componentDidMount() {
    this.loadFonts();

    const firebaseConfig = {
      apiKey: "AIzaSyBiLabPIr2UG8f8GU8FSh7QWct-kD-Byyk",
      authDomain: "digicast-5a0e8.firebaseapp.com",
      projectId: "digicast-5a0e8",
      storageBucket: "digicast-5a0e8.appspot.com",
      messagingSenderId: "589738221296",
      appId: "1:589738221296:web:30c37a57eb215abec62c35",
      measurementId: "G-TTKT1B83LW"
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app();
    }


  }

  async loadFonts() {
    await Font.loadAsync({
      // Load a font `Montserrat` from a static resource
      poppinsBlack: require("./src/Resources/fonts/Poppins-Black.ttf"),
      poppinsBold: require("./src/Resources/fonts/Poppins-Bold.ttf"),
      poppinsExtrabold: require("./src/Resources/fonts/Poppins-ExtraBold.ttf"),
      poppinsMedium: require("./src/Resources/fonts/Poppins-Medium.ttf"),
      poppinsRegular: require("./src/Resources/fonts/Poppins-Regular.ttf"),
      poppinsSemiBold: require("./src/Resources/fonts/Poppins-SemiBold.ttf"),
      poppinsThin: require("./src/Resources/fonts/Poppins-Thin.ttf"),
      montserratRegular: require("./src/Resources/fonts/Montserrat-Regular.ttf"),
      montserratMedium: require("./src/Resources/fonts/Montserrat-Medium.ttf"),

    });
    this.setState({ fontsLoaded: true });
  }



  render() {
    console.log(this.state.fontsLoaded);
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router />
        <ModalPortal />
      </Provider>

    )
  }
}
