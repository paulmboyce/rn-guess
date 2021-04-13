import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Alert, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { Theme, ThemeStyles } from "../themes";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import { ThemeText, ThemeTextHighlight } from "../components/themed";
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

const renderListItem = (value, index) => {
	return (
		<View style={styles.listItem} key={Math.random()}>
			<ThemeTextHighlight>
				Guess #{index} - {value}
			</ThemeTextHighlight>
		</View>
	);
};

const GameScreen = ({ gameNumber, onClickEndGame, onGameOver }) => {
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
		setGuesses((currentGuesses) => [...currentGuesses, lastGuess]);
	}, [lastGuess]);

	const checkForWin = () => {
		if (gameNumber === lastGuess) {
			console.log(`WIN! ${gameNumber} = ${lastGuess}`);
			setGuesses([]);
			onGameOver(guesses.length);
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
			<View style={ThemeStyles.box1}>
				<ScrollView contentContainerStyle={styles.list}>
					{guesses
						.reverse()
						.map((guess, index) =>
							renderListItem(guess, guesses.length - index)
						)}
				</ScrollView>
			</View>
			<View style={ThemeStyles.box1}>
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
	list: {
		marginTop: 20,
		width: "100%",
	},
	listItem: {
		marginTop: 1,
		paddingHorizontal: 60,
		paddingVertical: 5,
		borderColor: Theme.borderColor,
		borderWidth: Theme.borderWidth,
		borderRadius: 3,
	},
});

export default GameScreen;
