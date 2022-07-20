import { View, Text } from 'react-native'
import React from 'react';
import { Picker } from '@react-native-picker/picker';


export default function CustomDropdown(props) {


    return (
        <View>
            <Picker
                selectedValue={props.selectedValue}
                onValueChange={props.onValueChange}
                style={{ opacity: 0.5 }}
                fontFamily="montserratRegular"
            >
                {props.data?.map((item) => <Picker.Item label={item.name} value={item.name} />
                )}
            </Picker>
        </View>
    )
}