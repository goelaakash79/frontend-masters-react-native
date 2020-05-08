import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, hexCode }) => {
	const boxColor = {
		backgroundColor: hexCode,
	};
	return (
		<View style={[boxColor, styles.viewCard]}>
			<Text style={[styles.text]}>
				{colorName}: {hexCode}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	viewCard: {
		alignItems: 'center',
		padding: 8,
		borderRadius: 4,
		marginBottom: 8,
	},
	text: {
		fontFamily: 'Sen-Bold',
		color: '#FFF',
	},
	// darkBack: { backgroundColor: '#424242' },
	// redBack: { backgroundColor: '#DB4437' },
	// blueBack: { backgroundColor: '#4285F4' },
});

export default ColorBox;
