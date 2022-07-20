import React from "react"
import { StyleSheet, Image } from "react-native"
import { Router, Scene, Stack } from "react-native-router-flux"

import Peoples from './Screens/Main/Peoples'
import AdvertisementDetails from './Screens/Main/AdvertisementDetails'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


class RouterComponent extends React.Component {



    render() {
        const { hide } = this.props
        return (
            <Router>
                <Stack key="root"  >
                    <Scene key="advertisementdetails" component={AdvertisementDetails} hideNavBar={true}  />
                    <Scene key='peoples' tabBarStyle={styles.tabStyle} component={Peoples} hideNavBar={true} initial />
                </Stack>
            </Router>
        );
    }
}

const styles = StyleSheet.create({
    tabStyle: {
        height: hp("10%"),
        borderTopColor: 'darkgrey',
        borderTopWidth: 1,
        opacity: 0.98,
        justifyContent: 'space-between',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: "#2D133B",
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: "white",
        borderWidth: 2
    },
    tabStyle2: {
        height: hp("12%"),
        borderTopColor: 'darkgrey',
        borderTopWidth: 1,
        opacity: 0.98,
        justifyContent: 'space-between',
        paddingTop: 17,
        backgroundColor: "white",
        color: "black",
        fontSize: 40,
        fontWeight: "bold",
        width: wp(100),
    },
    labelStyle: {
        fontSize: hp("4%"),
        fontWeight: "bold"
    },
    indicator: {
        backgroundColor: "#fd6269"
    }
})

export default RouterComponent;





