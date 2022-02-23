import React,{Component} from 'react';
import {Text, View} from 'react-native';

export default class Profile extends Component {
    render(){
        return(
            <View
            style = {{
                flex : 1,
                justifyContent : 'centre',
                allienitems : 'centre'
            }}>
                <Text>Profile</Text>
                
            </View>
        )
    }
}