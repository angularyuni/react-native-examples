import React, {Component} from 'react';
import {
    View,
    Text,
    Slider,
    ScrollView,
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
            <Wrapper title="Text" {...this.props}>
                <ScrollView style={Style.Contents}>
                    <View style={Style.Box}>
                        <Text><Text style={{fontWeight: '700'}} >numberOfLines :</Text> 1, ellipsizeMode : tail(default)</Text>
                        <Text numberOfLines={1}>numberOfLines tesing.numberOfLines tesing.numberOfLines tesing.numberOfLines tesing.</Text>
                    </View>
                    <View style={Style.Box}>
                        <Text><Text style={{fontWeight: '700'}} >numberOfLines :</Text> 1, ellipsizeMode : head</Text>
                        <Text numberOfLines={1} ellipsizeMode="head">numberOfLines tesing.numberOfLines tesing.numberOfLines tesing.numberOfLines tesing.</Text>
                    </View>
                    <View style={Style.Box}>
                        <Text><Text style={{fontWeight: '700'}} >numberOfLines :</Text> 1, ellipsizeMode : middle</Text>
                        <Text numberOfLines={1} ellipsizeMode="middle">numberOfLines tesing.numberOfLines tesing.numberOfLines tesing.numberOfLines tesing.</Text>
                    </View>
                    <View style={Style.Box}>
                        <Text><Text style={{fontWeight: '700'}} >numberOfLines :</Text> 2</Text>
                        <Text numberOfLines={2}>numberOfLines testing.numberOfLines testing.numberOfLines testing.numberOfLines testing..numberOfLines testing..numberOfLines testing..numberOfLines testing..numberOfLines testing.</Text>
                    </View>
                    <View style={Style.Box}>
                        <Text style={{fontWeight: '700'}}>Nested Text tesing...</Text>
                        <Text style={Style.Color}>
                            color : red <Text style={Style.Size}>size : 40</Text>
                        </Text>
                    </View>
                </ScrollView>
            </Wrapper>
        )
    }
}