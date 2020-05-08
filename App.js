import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import ColorBox from './components/ColorBox';

const App = () => {
	return (
		<SafeAreaView style={styles.fluidContainer}>
			<View style={[styles.container]}>
				<Text style={[styles.headerText]}>
					Getting started with React Native.
				</Text>
				<ColorBox colorName="Red" hexCode="#DB4437" />
				<ColorBox colorName="Green" hexCode="#0F9D58" />
				<ColorBox colorName="Blue" hexCode="#4285f4" />
				<ColorBox colorName="Cyan" hexCode="#2aa198" />
				<ColorBox colorName="Yellow" hexCode="#F4B400" />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	fluidContainer: { flex: 1 },
	container: {
		// alignItems: 'center',
		justifyContent: 'center',
		padding: 16,
		// flex: 1,
	},
	headerText: {
		fontFamily: 'Sen-Bold',
		fontSize: 20,
		color: '#14171A',
		marginBottom: 12,
	},
});

export default App;
