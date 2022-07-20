import { Text, View, FlatList } from 'react-native'
import React, { Component } from 'react'
import { Modal, ModalFooter, ModalButton, ModalContent } from 'react-native-modals';
import ViewWithSpace from './ViewWithSpace'
import PressableOpacity from './PressableOpacity'
import { connect } from "react-redux"
import { ModalVisibleControl } from '../Actions'


class ModalCom extends Component {

  render() {

    // texts gonna be migrate to languages class and get the dynamically

    return (
      <Modal
        visible={this.props.modal_visible}
        swipeDirection={['up', 'down']} // can be string or an array
        swipeThreshold={200} // default 100
        onSwipeOut={() => {
          this.props.ModalVisibleControl(false)
        }}
        style={{ justifyContent: "center", alignItems: "center", flex: 1, paddingVertical: 50 }}
      >
        <ModalContent style={{}} >


          <Text>" Time is up so i didnt do step but should be get name and surname and add Function gonna be connect to redux store" </Text>


        </ModalContent>
      </Modal>
    )
  }
}

const mapStateToProps = ({ DigiResponse }) => {
  const { modal_visible } = DigiResponse;
  return {
    modal_visible,
  };
}

export default connect(mapStateToProps, { ModalVisibleControl })(ModalCom)
