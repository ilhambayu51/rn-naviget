import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Alert, Image} from 'react-native';
import Login from './Login';

export default class Second extends Component{
	redirect(){
		Alert.alert("this Button is ready")
	}
	render(){
		return(
			<View style={styles.container}>

			<Text style={styles.judul}>BIODATA!</Text>
			<Text style={styles.judul}>BIODATA!</Text>
			<Text style={styles.judul}>BIODATA!</Text>
			<Text style={styles.judul}>BIODATA!</Text>

			<Button title="LOG OUT"
			onPress ={() =>{this.props.navigation.navigate('login')}} />

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
	flex : 1,
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#003366',
	},
	judul:{
		fontSize: 25,
		textAlign: 'center',
		color: '#fff',
	},
	welcome: {
		fontSize: 15,
		textAlign: 'center',
		margin: 5,
		color: '#fff',
	},
})