import { Text, StyleSheet, Platform } from 'react-native';
import Colors from '../../constants/Colors';

const Title = ({ children }) => {
	return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 24,
		color: Colors.white,
		textAlign: 'center',
		// borderWidth: Platform.OS === 'android' ? 2 : 0,
		// borderWidth: Platform.select({ ios: 0, android: 2 }),
		padding: 12,
		maxWidth: '80%',
		width: 300,
	},
});

export default Title;
