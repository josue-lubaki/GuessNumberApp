import { View, Image, Text, StyleSheet } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/Colors';
import PrimaryButton from '../components/ui/PrimaryButton';

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
	return (
		<View style={styles.rootContainer}>
			<Title>GAME OVER !</Title>
			<View style={styles.imageContainer}>
				<Image
					source={require('../assets/images/success.png')}
					resizeMode='cover'
					style={styles.image}
				/>
			</View>
			<Text style={styles.summaryText}>
				Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the
				number <Text style={styles.highlight}>{userNumber}</Text>.
			</Text>
			<PrimaryButton onPress={onStartNewGame}>START NEW GAME</PrimaryButton>
		</View>
	);
};

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		padding: 24,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageContainer: {
		width: 360,
		height: 360,
		borderRadius: 180,
		borderWidth: 3,
		borderColor: Colors.white,
		overflow: 'hidden',
		margin: 36,
	},
	image: {
		width: '100%',
		height: '100%',
	},
	summaryText: {
		fontFamily: 'open-sans',
		fontSize: 24,
		textAlign: 'center',
		marginBottom: 24,
	},
	highlight: {
		fontFamily: 'open-sans-bold',
		color: Colors.primary500,
	},
});

export default GameOverScreen;
