import React from 'react';
import {Text, View, StyleSheet, Image, KeyboardAvoidingView, TextInput, Button} from 'react-native';
import Second from './Second';


class Login extends React.Component{
	render() {
		return(
			<KeyboardAvoidingView behavior="padding" style={kata.container}>

				<View style={kata.logoContainer}>

					<Image style={kata.logo}
					source={require('./6.png')}/>
					<Text style={kata.title}> Made for github using React Native</Text>
					<View style={kata.formContainer}>
					
					</View>

				<View style={kata.formContainer}>

				<TextInput placeholder="Ussername or email"
					return keyType="next"
					onSubmitEditing={() => this.passwordInput.focus()}
					keyboardType="email-address"
					autoCapitalize="none"
					autoCorrect={false}
					style={kata.input}/>
				<TextInput placeholder="Passwword"
					returnKeyType="go"
					secureTextEntry
					style={kata.input}
					ref={(input) => this.passwordInput = input} />

				<Button style={kata.buttonContainer}
					onPress ={() =>{this.props.navigation.navigate('Second')}}
					title = "LOGIN"/>
				</View>

				</View>
			</KeyboardAvoidingView>
		);
	}
}
const kata = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: '#3860bb',
	},
	logoContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center',
	},
	logo: {
		width: 100,
		height: 100,
	},
	title: {
		color: '#fff',
		marginTop: 20,
		textAlign: 'center',
		width: 170,
	}
});
export default Login;