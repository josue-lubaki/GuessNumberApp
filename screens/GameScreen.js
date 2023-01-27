import { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import InstructorText from '../components/ui/InstructorText';
import Card from '../components/ui/Card';
import GuessLogItem from '../components/game/GuessLogItem';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const generateRandomBetween = (min, max, exclude) => {
	const rndNum = Math.floor(Math.random() * (max - min)) + min;
	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
	const initialGuess = generateRandomBetween(1, 100, userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	const [guessRounds, setGuessRounds] = useState([initialGuess]);

	useEffect(() => {
		if (currentGuess === userNumber) {
			onGameOver(guessRounds.length);
		}
	}, [currentGuess, userNumber, onGameOver]);

	useEffect(() => {
		minBoundary = 1;
		maxBoundary = 100;
	}, []);

	const nextGuessHandler = (direction) => {
		if (
			(direction === 'lower' && currentGuess < userNumber) ||
			(direction === 'greater' && currentGuess > userNumber)
		) {
			Alert.alert("Don't lie!", 'You know that this is wrong...', [
				{ text: 'Sorry!', style: 'cancel' },
			]);
			return;
		}

		if (direction === 'lower') {
			maxBoundary = currentGuess;
		} else {
			minBoundary = currentGuess + 1;
		}

		const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
		setCurrentGuess(newRndNumber);
		setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
	};

	const guessRoundsListLenght = guessRounds.length;

	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<InstructorText style={styles.instructorText}>Higher or lower ?</InstructorText>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
							<Ionicons name='md-remove' size={24} color={Colors.white} />
						</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
							<Ionicons name='md-add' size={24} color={Colors.white} />
						</PrimaryButton>
					</View>
				</View>
			</Card>
			<View style={styles.listContainer}>
				<FlatList
					data={guessRounds}
					renderItem={(itemData) => (
						<GuessLogItem
							roundNumber={guessRoundsListLenght - itemData.index}
							guess={itemData.item}
						/>
					)}
					keyExtractor={(item) => item.toString()}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		paddingTop: 48,
		paddingHorizontal: 24,
	},
	instructorText: {
		marginBottom: 12,
	},
	buttonsContainer: {
		flexDirection: 'row',
	},
	buttonContainer: {
		flex: 1,
	},
	listContainer: {
		flex: 1,
		padding: 16,
	},
});

export default GameScreen;
