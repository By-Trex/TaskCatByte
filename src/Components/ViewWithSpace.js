import React from 'react';
import {View,ViewProps} from 'react-native';

export interface ViewWithSpaceProps extends ViewProps {
    space?:number
}

export default function ViewWithSpace({...props}: ViewWithSpaceProps): React.ReactElement {

    var filtered;
    if (props.children && props.children.filter) {
        filtered = props.children.filter(function (el) {
            return el != null && el != false;
        });
    }

    return <View {...props} >
        {filtered && filtered.length > 1  ?
            filtered.map((p, index)=>{
                let arr = [];
                arr.push(p);
                if (index < filtered.length-1) {
                    if (props.line) {
                        arr.push(<View key={index} style={{backgroundColor:"lightgray" , height:1, marginVertical:props.space}}/>);
                    } else {
                        arr.push(<View key={index} style={{width:props.space , height:props.space}}/>);
                    }
                }
                return arr;
            })
            :
            props.children
        }

    </View>;
}


