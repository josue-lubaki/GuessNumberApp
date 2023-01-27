import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const PrimaryButton = ({ children, onPress }) => {
	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				style={({ pressed }) =>
					pressed ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer
				}
				onPress={onPress}
				android_ripple={{ color: Colors.primary600 }}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonOuterContainer: {
		borderRadius: 28,
		margin: 4,
		overflow: 'hidden',
	},
	buttonInnerContainer: {
		backgroundColor: Colors.primary500,
		paddingVertical: 8,
		paddingHorizontal: 16,

		// shadow Android only
		elevation: 2,
	},
	pressed: {
		opacity: 0.75,
	},
	buttonText: {
		textAlign: 'center',
		color: Colors.white,
	},
});

export default PrimaryButton;
