import React, { Component } from 'react';
import {
    View,
    Text,
    Picker,
    ScrollView
} from 'react-native';

import {Style} from './style';
import {Wrapper} from './../Layout';

export default class  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language : "java"
        }
    }
    onValueChange(key, value){
        const newState = {};
        newState[key] = value;
        this.setState(newState);
    }
    render() {
        return (
            <Wrapper title="Picker" {...this.props}>
                <ScrollView style={Style.Contents} >
                    <View style={Style.PickerWrap}>
                        <Picker
                            style={Style.Picker}
                            selectedValue={this.state.language}
                            onValueChange={this.onValueChange.bind(this, 'language')}>
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                            <Picker.Item label="TypeScript" value="ts" />
                            <Picker.Item label="VisualBasic" value="vs" />
                            <Picker.Item label="C#" value="cs" />
                        </Picker>
                    </View>
                    <Text style={{marginTop: 10, marginLeft: 20, fontSize: 18}}>state : {this.state.language}</Text>
                </ScrollView>
            </Wrapper>
        );
    }
}

