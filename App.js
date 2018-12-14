import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './src/commom/Commom';
import firebase from 'firebase';
import LoginForm from './src/LoginForm'

class App extends Component {
    state = { loggedIn: null };

    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyC8wzICtkmCLmvOcFFEHnozUAz7QZ-klh8",
            authDomain: "auth-cc7b0.firebaseapp.com",
            databaseURL: "https://auth-cc7b0.firebaseio.com",
            projectId: "auth-cc7b0",
            storageBucket: "auth-cc7b0.appspot.com",
            messagingSenderId: "732895620331"            
        });

        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent(){
        switch (this.state.loggedIn) {
            case true:
                return(
                    <Button onPress={() => firebase.auth().signOut()}> 
                        Log Out
                    </Button>
                );  
            case false:
                return <LoginForm />
            default:
                return <Spinner size="large" />
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        );
    };
}

export default App;