import { Text, StyleSheet } from 'react-native';
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
		borderWidth: 2,
		borderColor: Colors.white,
		padding: 12,
		maxWidth: '80%',
		width: 300,
	},
});

export default Title;
