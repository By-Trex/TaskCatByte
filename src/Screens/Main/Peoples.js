import { Text, View, StyleSheet, FlatList, Image } from 'react-native'
import React, { Component } from 'react'
import SearchBar from '../../Components/SearchBar'
import { Images } from '../../Resources/images/Images';
import ViewWithSpace from '../../Components/ViewWithSpace';
import PressableOpacity from '../../Components/PressableOpacity';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { Staffs } from '../../backend/staffServices';
import { Actions } from "react-native-router-flux";
import CustomButton from '../../Components/CustomButton';
import ModalCom from '../../Components/ModalCom';
import { connect } from "react-redux"
import { ModalVisibleControl } from '../../Actions'

class Peoples extends Component {
  constructor(props) {
    super(props)
    this.state = {
      responses: [],
      newResponses:[]
    }
  }
  async componentDidMount() {
    await Staffs.getStaff().then((data) => {
      this.setState({ responses: data.data })
    })

  }

  renderData = (item) => {
    return (<PressableOpacity style={{
      flex: 1 / 2,
      alignItems: "center",
      justifyContent: "center",
      height: widthPercentageToDP(100) * .6,
      padding: 10,
    }} onPress={() => Actions.advertisementdetails(item)}>
      <Image style={{ flex: 1, width: "100%", borderRadius: 20, backgroundColor: "red" }}
        source={{ uri: item.image }} />
      <Text style={{
        fontSize: 16,
        // fontFamily: Fonts.semibold,
        marginTop: 10
      }}>{item.firstName + " " + item.age}</Text>
      <PressableOpacity
        onPress={() => this.removeItem(item.username)}
        style={{
          position: "absolute",
          right: 15,
          top: 15
        }}>
        <Image style={{
          width: 30,
          height: 30,

        }} source={Images.minus} />
      </PressableOpacity>

    </PressableOpacity>);

  }

  removeItem = (item) => {

    // THİS FUNC GONNA BE MIGRATE TO  REDUX

    for (var i in this.state.responses.users) {
      if (this.state.responses.users[i].username == item) {
        var newA = this.state.responses.users.splice(i, 1);
        this.setState({ newResponses : newA})
        alert("User has been removed")
        break;
      }
    }
  }

  addItem = (item) => {

    return(
      <ModalCom />
    )
  }


  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          logo
          sort
          onChangeNumber={(item) => this.setState({ filterWord: item })} />
        <View style={{ flex: 1 }}>
          <FlatList style={{ marginTop: 0, paddingHorizontal: 10 }}
            data={this.state.responses.users }
            numColumns={2}
            renderItem={({ item, index }) => this.renderData(item)}
            ListFooterComponent={() => <View style={{ height: this.props.bottomBarHeight }} />}
            showsVerticalScrollIndicator={false} />
        </View>
        <CustomButton
          label={"ADD USER"}
          style={{ height: 50, marginVertical: 10 }}
          onPress={() =>{this.props.ModalVisibleControl(true) ,  this.addItem()}}
        />
        <ModalCom />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 30
  }
})

const mapStateToProps = ({ DigiResponse }) => {
  const { modal_visible } = DigiResponse;
  return {
    modal_visible,
  };
}

export default connect(mapStateToProps, { ModalVisibleControl })(Peoples)