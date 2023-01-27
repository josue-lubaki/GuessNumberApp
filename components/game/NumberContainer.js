import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const NumberContainer = ({ children }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.numberText}>{children}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		borderWidth: 2,
		borderColor: Colors.accent500,
		borderRadius: 8,
		padding: 24,
		margin: 24,
		alignItems: 'center',
		justifyContent: 'center',
	},
	numberText: {
		color: Colors.accent500,
		fontFamily: 'open-sans-bold',
		fontSize: 36,
	},
});

export default NumberContainer;
