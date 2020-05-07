import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
	return (
		<SafeAreaView style={styles.fluidContainer}>
			<View style={[styles.container]}>
				<View style={[styles.viewCard, styles.darkBack]}>
					<Text style={[styles.text, styles.textWhite]}>
						Hola amigos
					</Text>
				</View>
				<View style={[styles.viewCard, styles.redBack]}>
					<Text style={[styles.text, styles.textWhite]}>
						Hola amigos
					</Text>
				</View>
				<View style={[styles.viewCard, styles.blueBack]}>
					<Text style={[styles.text, styles.textWhite]}>
						Hola amigos
					</Text>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	fluidContainer: {
		flex: 1,
		margin: 16,
	},
	container: {
		// alignItems: 'center',
		justifyContent: 'center',
		// flex: 1,
	},
	viewCard: {
		alignItems: 'center',
		padding: 8,
		borderRadius: 4,
		marginBottom: 8,
	},
	text: {
		fontWeight: 'bold',
	},
	darkBack: {backgroundColor: '#424242'},
	redBack: {backgroundColor: '#DB4437'},
	blueBack: {backgroundColor: '#4285F4'},
	textWhite: {color: '#ffffff'},
});

export default App;
