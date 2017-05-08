import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    Switch
} from 'react-native';

import {Style} from './style';
import {Wrapper} from './../Layout';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switch1 : true,
            switch2 : false,
        }

    }
    render() {
        return (
            <Wrapper title="Switch" {...this.props}>
                <ScrollView style={Style.Contents}>
                    <View style={Style.Box}>
                        <Text>switch1 : {this.state.switch1 ? "True" : "False"} </Text>
                        <Switch 
                            style={Style.Switch}
                            onValueChange={(value) => { this.setState({switch1: value}); }}
                            onTintColor="#000" // background for true
                            thumbTintColor="#ff9900" // switch onTintColor
                            tintColor="#b90000" // back color for false
                            value={this.state.switch1} />
                    </View>
                    <View style={Style.Box}>
                        <Text>switch2 : {this.state.switch2 ? "True" : "False"} </Text>
                        <Switch 
                            style={Style.Switch}
                            onValueChange={(value) => { this.setState({switch2: value}); }}
                            onTintColor="#73be1e" // background for true
                            thumbTintColor="#ff9800" // switch onTintColor
                            tintColor="#0065a3" // back color for false
                            value={this.state.switch2} />
                    </View>
                </ScrollView>
            </Wrapper>
        );
    }
}
