import React, { Component } from 'react';
import { Text,TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './commom/Commom'

class LoginForm extends Component {
    state = { email: '' };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        placeholder="user@email.com"
                        label="Email:"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <TextInput></TextInput>
                </CardSection>

                <CardSection>
                    <Button>Log In</Button>
                </CardSection>
                
               
            </Card>
        );
    };
}



export default LoginForm;