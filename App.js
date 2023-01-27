import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/Colors';

export default function App() {
	const [userNumber, setUserNumber] = useState();
	const [gameIsOver, setGameIsOver] = useState(false);
	const [guessRounds, setGuessRounds] = useState(0);

	const [fontsLoaded] = useFonts({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	const pickedNumberHandler = (pickedNumber) => {
		setUserNumber(pickedNumber);
		setGameIsOver(false);
	};

	const onGameOverHandler = (numberOfRounds) => {
		setGameIsOver(true);
		setGuessRounds(numberOfRounds);
	};

	const startNewGameHandler = () => {
		setUserNumber(null);
		setGuessRounds(0);
	};

	let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

	if (userNumber) {
		screen = <GameScreen userNumber={userNumber} onGameOver={onGameOverHandler} />;
	}

	if (gameIsOver && userNumber) {
		screen = (
			<GameOverScreen
				userNumber={userNumber}
				roundsNumber={guessRounds}
				onStartNewGame={startNewGameHandler}
			/>
		);
	}

	return (
		<LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
			<ImageBackground
				source={require('./assets/images/dices-img.png')}
				resizeMode='cover'
				style={styles.rootScreen}
				imageStyle={styles.backgroundImage}
			>
				<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.15,
	},
});
