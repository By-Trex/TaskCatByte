

import React, {Component} from 'react';
import {View, Text, Animated, StyleSheet, Easing} from 'react-native';

export default class OrbitView extends Component {
    constructor() {
        super();
        this.animated = new Animated.Value(0);
        var inputRange = [0, 1];
        var outputRange = ['0deg', '360deg'];
        this.rotate = this.animated.interpolate({inputRange, outputRange});
        outputRange = ['0deg', '-360deg'];
        this.rotateOpposit = this.animated.interpolate({inputRange, outputRange});
        this.state={
            speed:4000
        }
    }



    componentDidMount() {
        this.setState({speed:this.props.speed}, ()=>{
            this.animated.setValue(0)
            this.animate();
            this.animation.start();
        })

    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
        if (this.props.speed !== this.state.speed) {
            if (this.animation) {
                this.animation.stop();
                this.animation = null;
            }

            this.setState({speed:this.props.speed}, ()=>{
                this.animated.setValue(0)
                this.animate();
                this.animation.start();
            })
        }

    }

    animate() {
        this.animation = Animated.loop(
            Animated.timing(this.animated, {
                toValue: 1,
                duration: this.state.speed,
                useNativeDriver: true,
                easing: Easing.linear,
            }),
        );
    }
    render() {
        const transform = [{rotate: this.rotate}];
        const transform1 = [{rotate: this.rotateOpposit}];

        return (
            <View style={{ position:"absolute", borderRadius:1000,width:this.props.diameter, height:this.props.diameter, borderWidth:1, borderColor:"#ebe8ec"}}>
                <Animated.View style={[styles.item, {width:this.props.diameter , height:this.props.diameter,transform}]}>
                    <Animated.View style={[{top:-(this.props.orbitSize/2),width:this.props.orbitSize, alignSelf:"center",transform: transform1}]}>
                        {this.props.children}
                    </Animated.View>
                </Animated.View>

            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        position: 'absolute',
        alignSelf:"center",
        width: 200,
        bottom:0,
        height: 200, // this is the diameter of circle
    },
    topItem: {
        width: '100%',
        height: 20,
        backgroundColor: 'red',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
    },
});
