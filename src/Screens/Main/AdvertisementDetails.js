import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import BackButton from '../../Components/BackButton'


export default class AdvertisementDetails extends Component {

    componentDidMount() {
    }

    renderData = ({ item }) => {
        return (
            <View style={{ flexDirection: "row", left: wp(5) }}>
                <View style={{ width: wp(30) }}>
                    <Text style={styles.leftLabel}>{item.name} : </Text>
                </View>
                <Text style={{ fontFamily: "poppinsMedium", color: "black", fontSize: 13 }}>{item.value}</Text>
            </View>
        )
    }

    render() {

        let listLabels = [
            {
                name: "First Name",
                value: this.props.firstName
            },
            {
                name: "Last Name",
                value: this.props.lastName
            },
            {
                name: "Maiden Name",
                value: this.props.maidenName
            },
            {
                name: "Age",
                value: this.props.age
            },
            {
                name: "Gender",
                value: this.props.gender
            },
            {
                name: "Email",
                value: this.props.email
            },
            {
                name: "Phone",
                value: this.props.phone
            },
            {
                name: "birthDate",
                value: this.props.birthDate
            },
            {
                name: "Blood Group",
                value: this.props.bloodGroup
            },

            {
                name: "Weight",
                value: this.props.weight
            },
            {
                name: "Height",
                value: this.props.height
            },
        ]

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                <BackButton />

                    <Image
                        source={{ uri: this.props.image }}
                        style={{ width: wp(100), height: hp(22), borderBottomLeftRadius: 100, borderBottomRightRadius: 100, resizeMode: "stretch" }}
                    />
                    <Image
                        source={{ uri: this.props.image }}
                        style={{ width: 88, height: 88, position: "absolute", top: hp(13), left: wp(5) }}
                    />
                </View>
                <Text style={styles.title}>{this.props.username}</Text>
                <View>
                    <FlatList
                        data={listLabels}
                        keyExtractor={(item, index) => { index.toString() }}
                        renderItem={(item) => this.renderData(item)}
                        ItemSeparatorComponent={() => <View style={{ height: 1 }} />}
                        style={{ marginTop: hp(6) }}
                    />
                </View>
                <View style={{ top: 10, height: 1, backgroundColor: "#F9F9F9" }} />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    header: {
    },
    buttonContainer: {
        width: 80,
        height: 30,
        borderRadius: 5,
        borderColor: "black",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        alignSelf: "center",
        top: hp(4),
        color: "#000000",
        fontFamily: "poppinsSemiBold",
        fontSize: 15
    },
    leftLabel: {
        fontFamily: "poppinsMedium",
        color: "#00000080",
        opacity: 0.5,
        fontSize: 13
    }
})