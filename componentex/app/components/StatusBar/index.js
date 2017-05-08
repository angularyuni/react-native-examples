import React, {Component} from 'react';
import {
    View,
    Text,
    Slider,
    ScrollView,
    StatusBar
} from 'react-native';

import {Style} from './style';
import {Wrapper} from './../Layout';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : 1
        }
    }
    render() {
        return (
            <Wrapper title="StatusBar" {...this.props}>
                <ScrollView style={Style.Contents}>
                    <StatusBar
                        animated={true}
                        hidden={false}
                        backgroundColor="blue" // for Android
                        barStyle="default" // for IOS
                        style={{backgroundColor: "red"}}
                    />
                    <View style={Style.Box}>
                        <Text>-- content --</Text>
                    </View>
                    <View style={Style.Box}>
                        <Text>-- content --</Text>
                    </View>
                    <View style={Style.Box}>
                        <Text>-- content --</Text>
                    </View>
                    <View style={Style.Box}>
                        <Text>-- content --</Text>
                    </View>
                    <View style={Style.Box}>
                        <Text>-- content --</Text>
                    </View>
                    <View style={Style.Box}>
                        <Text>-- content --</Text>
                    </View>
                    <View style={Style.Box}>
                        <Text>-- content --</Text>
                    </View>
                </ScrollView>
            </Wrapper>
        )
    }
}