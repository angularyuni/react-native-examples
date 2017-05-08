import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Modal,
    ScrollView
} from 'react-native'

import {Style} from './style';
import {Wrapper} from './../Layout';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible : false
        }
    }
    modalToggle(){
        this.setState({
            modalVisible : !this.state.modalVisible
        })
    }
    render() {
        return (
            <Wrapper title="Modal" {...this.props}>
                <ScrollView style={Style.Contents}>
                    <View style={Style.Item}>
                        <Text>-- content --</Text>
                    </View>
                    <View style={Style.Item}>
                        <Text>-- content --</Text>
                    </View>
                    <View style={Style.Item}>
                        <Text>-- content --</Text>
                    </View>
                    <View style={Style.Item}>
                        <Text>-- content --</Text>
                    </View>
                    <View style={Style.Item}>
                        <Text>-- content --</Text>
                    </View>
                    <View style={Style.Item}>
                        <Text>-- content --</Text>
                    </View>
                </ScrollView>
                <TouchableOpacity style={Style.Btn} onPress={() => this.modalToggle()} >
                    <Text>Show Modal Button</Text>
                </TouchableOpacity>
                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={this.state.modalVisible}
                >
                    <View style={Style.modal}>
                        <Text>Hello World!</Text>
                        <TouchableOpacity style={Style.Btn} onPress={() => this.modalToggle()} >
                            <Text>Hide Modal Button</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </Wrapper>
        );
    }
}

