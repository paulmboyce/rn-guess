import React, { useState, Fragment, useEffect, useRef } from "react";
import { View, StyleSheet, Text, Button, Alert } from "react-native";

import { Theme, ThemeStyles } from "../themes";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const generateRandomNumber = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);

	const random = Math.floor(Math.random() * (max - min) + min);
	if (random === exclude) {
		return generateRandomNumber(min, max, exclude);
	}

	return random;
};

const GameScreen = ({ style, gameNumber, onClickEndGame, onGameOver }) => {
	const [numTries, setNumTries] = useState(0);
	const [lastGuess, setLastGuess] = useState(
		generateRandomNumber(1, 100, gameNumber)
	);

	const minGuess = useRef(0);
	const maxGuess = useRef(100);

	useEffect(() => {
		checkForWin();
	});

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
		setNumTries((numTries) => numTries + 1);
	};

	const guessHigher = () => {
		if (lastGuess > gameNumber) {
			showCheatAlert();
			return;
		}
		const bottom = Math.max(minGuess.current, lastGuess);
		minGuess.current = bottom;
		setLastGuess(generateRandomNumber(bottom, maxGuess.current, lastGuess));
		setNumTries((numTries) => numTries + 1);
	};

	return (
		<View style={(style, styles.screen)}>
			<Text
				style={(style, ThemeStyles.text)}
			>{`Press LOWER or HIGHER buttons\n        to give the robot clues.`}</Text>
			<Card style={(style, styles.card)}>
				<Text style={(style, ThemeStyles.text)}>Robot Guess is</Text>
				<View style={(style, styles.guessClueLayout)}>
					<View style={(style, ThemeStyles.buttonWrapperSmall)}>
						<Button
							title="LOWER"
							onPress={guessLower}
							color={Theme.primaryColor}
						/>
					</View>
					<NumberContainer>{lastGuess}</NumberContainer>
					<View style={(style, ThemeStyles.buttonWrapperSmall)}>
						<Button
							title="HIGHER"
							onPress={guessHigher}
							color={Theme.primaryColor}
						/>
					</View>
				</View>
			</Card>
			<Button
				onPress={onClickEndGame}
				title="End Game"
				color={Theme.secondaryColor}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		width: "100%",
		justifyContent: "space-evenly",
		alignItems: "center",
		backgroundColor: Theme.backgroundColor,
	},
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
});

export default GameScreen;
