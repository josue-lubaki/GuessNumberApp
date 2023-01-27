import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructorText from '../components/ui/InstructorText';
import Colors from '../constants/Colors';

const StartGameScreen = ({ onPickedNumber }) => {
	const [enteredNumber, setEnteredNumber] = useState('');
	const numberInputHandler = (enteredText) => {
		setEnteredNumber(enteredText);
	};

	const resetInputHandler = () => {
		setEnteredNumber('');
	};

	const confirmInputHandler = () => {
		const chosenNumber = parseInt(enteredNumber);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [
				{
					text: 'Okay',
					style: 'destructive',
					onPress: resetInputHandler,
				},
			]);
			return;
		}

		onPickedNumber(chosenNumber);
	};

	return (
		<View style={styles.rootContainer}>
			<Title>Guess My Number</Title>
			<Card>
				<InstructorText>Enter a Number</InstructorText>
				<TextInput
					style={styles.numberInput}
					maxLength={2}
					keyboardType='number-pad' // https://reactnative.dev/docs/textinput#keyboardtype
					autoCapitalize='none' // https://reactnative.dev/docs/textinput#autocapitalize
					autoCorrect={false} // https://reactnative.dev/docs/textinput#autocorrect
					onChangeText={numberInputHandler}
					value={enteredNumber}
				/>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
					</View>
				</View>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		marginTop: 100,
		alignItems: 'center',
	},
	numberInput: {
		height: 50,
		width: 50,
		fontSize: 32,
		borderBottomColor: Colors.accent500,
		borderBottomWidth: 2,
		color: Colors.accent500,
		marginVertical: 8,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	buttonsContainer: {
		flexDirection: 'row',
	},
	buttonContainer: {
		flex: 1,
	},
});

export default StartGameScreen;
