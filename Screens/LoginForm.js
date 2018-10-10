import React from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar} from 'react-native';

class LoginForm extends React.Component{
	render(){
		return(
			<View style={stail.container}>
			<StatusBar barStyle="light-content" />
			<TextInput placeholder="Ussername or email"
			return keyType="next"
			onSubmitEditing={() => this.passwordInput.focus()}
			keyboardType="email-address"
			autoCapitalize="none"
			autoCorrect={false}
			style={stail.input}/>
			<TextInput placeholder="Passwword"
			returnKeyType="go"
			secureTextEntry
			style={stail.input}
			ref={(input) => this.passwordInput = input} />

			<TouchableOpacity style={stail.buttonContainer}>
				<Text style={stail.buttonText}>LOGIN</Text>
			</TouchableOpacity>
			</View>
		);
	}
}
const stail = StyleSheet.create({
	container:{
		padding: 100,
		marginBottom: -100,
	},
	input: {
		height: 40,
		backgroundColor: '#d1dceb',
		marginBottom: 18,
		paddingHorizontal: 10,
		width: 350,
	},
	buttonContainer: {
		backgroundColor: '#00d',
		paddingVertical: 10,
	},
	buttonText: {
		textAlign: 'center',
		color: '#f5f9fd',
	}
});
export default LoginForm;