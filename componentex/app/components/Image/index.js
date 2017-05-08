import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';

import {Style} from './style';
import {Wrapper} from './../Layout';

class ImageCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render(){
        const newProps = Object.assign({
            source : {uri : "https://avatars0.githubusercontent.com/u/20742169?v=3&u=606f822eb6b1ccc9aea114bd491c7ecf3fc521c6&s=400"},
            style : {width: 200, height: 80}
        }, this.props)
        return (
            <Image {...newProps} />
        )
    }
}

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <Wrapper title="Image" {...this.props}>
                <ScrollView style={Style.Contents}>
                    <View style={Style.Item}>
                        <Text>1. local file (require)</Text>
                        <ImageCustom
                            source={require('./../../resource/images/wisePhoto.jpeg')}
                        />
                    </View>
                    <View style={Style.Item}>
                        <Text>2. source from uri, image size 297,297 (current component 200, 80) </Text>
                        <ImageCustom
                            onLayout={(e)=> {
                                console.log("onLayout", e.nativeEvent)
                            }}
                            onLoadStart={(e)=> {
                                console.log("onLoadStart", e.nativeEvent)
                            }}
                            onLoad={(e)=> {
                                console.log("onLoad", e.nativeEvent)
                            }}
                            onLoadEnd={(e)=> {
                                console.log("onLoadEnd", e.nativeEvent)
                            }}
                        />
                    </View>
                    <View style={Style.Item}>
                        <Text>3. resizeMode : cover </Text>
                        <ImageCustom resizeMode="cover" />
                    </View>
                    <View style={Style.Item}>
                        <Text>4. resizeMode : contain </Text>
                        <ImageCustom resizeMode="contain" />
                    </View>
                    <View style={Style.Item}>
                        <Text>5. resizeMode : stretch </Text>
                        <ImageCustom resizeMode="stretch" />
                    </View>
                    <View style={Style.Item}>
                        <Text>6. resizeMode : center </Text>
                        <ImageCustom resizeMode="center" />
                    </View>
                    <View style={Style.Item}>
                        <Text>7. resizeMode : repeat - iOS only </Text>
                        <ImageCustom resizeMode="repeat" />
                    </View>
                </ScrollView>
            </Wrapper>
        )
    }
}