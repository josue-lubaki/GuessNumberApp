import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const InstructorText = ({ children, style }) => {
	return <Text style={[styles.instructorText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
	instructorText: {
		fontFamily: 'open-sans',
		color: Colors.accent500,
		fontSize: 24,
	},
});

export default InstructorText;
