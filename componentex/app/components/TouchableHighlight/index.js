import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableHighlight
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
            <Wrapper title="TouchableHighlight" {...this.props}>
                <View style={Style.CenterView}>
                    <TouchableHighlight
                        style={Style.Btn}
                        activeOpacity={0.5} // 클릭시 Opacity
                        onHideUnderlay={(e)=>{
                            console.log("onHideUnderlay")
                        }}
                        onPress={(e)=>{
                            console.log("onPress")
                        }}
                        onShowUnderlay={(e)=>{
                            console.log("onShowUnderlay")
                        }}
                        underlayColor="#ff9800" // 기본은 검은색
                    >
                        <Text style={{color: '#0065a3', fontSize: 20}}>TouchableHighlight</Text>
                    </TouchableHighlight>
                    <View>
                        <Text style={{marginTop: 10}}>Highlight change. (underlayColor)</Text>
                    </View>
                </View>
            </Wrapper>
        )
    }
}