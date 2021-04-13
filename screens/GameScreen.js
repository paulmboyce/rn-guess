import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { Theme, ThemeStyles } from "../themes";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import { ThemeText } from "../components/themed";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";

const generateRandomNumber = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);

	const random = Math.floor(Math.random() * (max - min) + min);
	if (random === exclude) {
		return generateRandomNumber(min, max, exclude);
	}

	return random;
};

const GameScreen = ({ gameNumber, onClickEndGame, onGameOver }) => {
	const [numTries, setNumTries] = useState(0);
	const [lastGuess, setLastGuess] = useState(
		generateRandomNumber(1, 100, gameNumber)
	);
	const [guesses, setGuesses] = useState([]);

	const minGuess = useRef(0);
	const maxGuess = useRef(100);

	useEffect(() => {
		checkForWin();
	});

	useEffect(() => {
		updateGuessStats(lastGuess);
	}, [lastGuess]);

	const updateGuessStats = (lastGuess) => {
		console.log("Updating GuessStats..");
		setNumTries((currentNumTries) => currentNumTries + 1);
		setGuesses((currentGuesses) => [lastGuess, ...currentGuesses]);
		guesses.map((guess) => console.log("Guessed: ", guess));
	};

	const checkForWin = () => {
		if (gameNumber === lastGuess) {
			console.log(`WIN! ${gameNumber} = ${lastGuess}`);
			onGameOver(numTries);
		}
	};

	const showCheatAlert = () => {
		Alert.alert("🤖 bad robot says:", '\n\n"Don\'t cheat!" ☝');
	};

	const guessLower = () => {
		if (lastGuess < gameNumber) {
			showCheatAlert();
			return;
		}

		const top = Math.min(maxGuess.current, lastGuess);
		maxGuess.current = top;
		setLastGuess(generateRandomNumber(minGuess.current, top, lastGuess));
	};

	const guessHigher = () => {
		if (lastGuess > gameNumber) {
			showCheatAlert();
			return;
		}
		const bottom = Math.max(minGuess.current, lastGuess);
		minGuess.current = bottom;
		setLastGuess(generateRandomNumber(bottom, maxGuess.current, lastGuess));
	};

	return (
		<View style={ThemeStyles.screen}>
			<View style={ThemeStyles.box1}>
				<ThemeText style={styles.howToPlay}>
					Press LOWER or HIGHER buttons to give the robot clues.
				</ThemeText>
			</View>
			<View style={ThemeStyles.box1}>
				<Card style={styles.card}>
					<ThemeText>Robot Guess is</ThemeText>
					<View style={styles.guessClueLayout}>
						<View style={ThemeStyles.buttonWrapperSmall}>
							<ButtonPrimary title="LOWER" onPress={guessLower}>
								<AntDesign name="caretdown" size={22} />
							</ButtonPrimary>
						</View>
						<NumberContainer>{lastGuess}</NumberContainer>
						<View style={ThemeStyles.buttonWrapperSmall}>
							<ButtonPrimary title="HIGHER" onPress={guessHigher}>
								<AntDesign name="caretup" size={22} />
							</ButtonPrimary>
						</View>
					</View>
				</Card>
			</View>
			<View style={ThemeStyles.box2}>
				<ButtonSecondary
					onPress={onClickEndGame}
					title="End Game"
					color={Theme.secondaryColor}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	guessClueLayout: {
		width: "80%",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	card: {
		maxWidth: "80%",
		padding: 10,
	},
	howToPlay: {
		fontSize: 18,
		textAlign: "center",
		paddingHorizontal: 50,
	},
});

export default GameScreen;
