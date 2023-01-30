import { View, Image, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/Colors';
import PrimaryButton from '../components/ui/PrimaryButton';

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
	const { width, height } = useWindowDimensions();

	let imageSize = 300;

	if (width < 380) {
		imageSize = 150;
	}

	if (height < 450) {
		imageSize = 120;
	}

	const imageStyle = {
		width: imageSize,
		height: imageSize,
		borderRadius: imageSize / 2,
	};

	return (
		<ScrollView style={styles.screen}>
			<View style={styles.rootContainer}>
				<Title>GAME OVER !</Title>
				<View style={[styles.imageContainer, imageStyle]}>
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
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	rootContainer: {
		flex: 1,
		padding: 24,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageContainer: {
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
