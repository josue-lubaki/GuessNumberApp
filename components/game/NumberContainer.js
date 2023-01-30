import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';

const NumberContainer = ({ children }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.numberText}>{children}</Text>
		</View>
	);
};

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
	container: {
		borderWidth: 3,
		borderColor: Colors.accent500,
		borderRadius: 8,
		padding: deviceWidth < 380 ? 12 : 24,
		margin: deviceWidth < 380 ? 12 : 24,
		alignItems: 'center',
		justifyContent: 'center',
	},
	numberText: {
		color: Colors.accent500,
		fontFamily: 'open-sans-bold',
		fontSize: deviceWidth < 380 ? 28 : 36,
	},
});

export default NumberContainer;
