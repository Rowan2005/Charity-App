import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';
    import firebase from 'firebase';
    import db from '../config';

    export default class RequestScreen extends Component{
        render(){
            return(
                <View>
                    <Text>RequestScreen</Text>
                </View>
            )
        }
    }