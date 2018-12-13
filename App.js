import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './src/commom/Commom';
import firebase from 'firebase';
import LoginForm from './src/LoginForm'

class App extends Component {
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyC8wzICtkmCLmvOcFFEHnozUAz7QZ-klh8",
            authDomain: "auth-cc7b0.firebaseapp.com",
            databaseURL: "https://auth-cc7b0.firebaseio.com",
            projectId: "auth-cc7b0",
            storageBucket: "auth-cc7b0.appspot.com",
            messagingSenderId: "732895620331"            
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                <LoginForm />
            </View>
        );
    };
}

export default App;