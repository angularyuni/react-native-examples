import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

import {Style} from './style';
import {Wrapper} from './../Layout';

export default class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                
            }
        }
    render() {
        return (
            <Wrapper title="Navigator" {...this.props}>
                <View style={Style.CenterView}>
                    <Text style={Style.textInfo}>Navigator example => index.js </Text>
                </View>
            </Wrapper>
        )
    }
}

