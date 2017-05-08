import React, { Component } from 'react';
import {
    View,
    Text,
    MapView
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
           <Wrapper title="MapView" {...this.props}>
               <MapView
                    style={Style.Contents}
                    showUserlocation={true}
                    annotations = {[
                        {
                            longitude: -79.381667,
                            latitude: 43.6525,
                            title: 'Welcome to Toronto',
                        }
                    ]}
               />
           </Wrapper>
        );
    }
}