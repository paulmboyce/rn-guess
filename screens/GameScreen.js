import React, { useState, Fragment, useEffect } from "react";
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

const GameScreen = ({ gameNumber, onClickEndGame, onGameOver }) => {
	const [lastGuess, setLastGuess] = useState(
		generateRandomNumber(1, 100, gameNumber)
	);

	const [minGuess, setMinGuess] = useState(0);
	const [maxGuess, setMaxGuess] = useState(100);

	useEffect(() => {
		checkForWin();
	});

	const checkForWin = () => {
		if (gameNumber === lastGuess) {
			console.log(`WIN! ${gameNumber} = ${lastGuess}`);
			onGameOver();
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

		const top = Math.min(maxGuess, lastGuess);
		setMaxGuess(top);
		setLastGuess(generateRandomNumber(minGuess, top, lastGuess));
	};
	const guessHigher = () => {
		if (lastGuess > gameNumber) {
			showCheatAlert();
			return;
		}
		const bottom = Math.max(minGuess, lastGuess);
		setMinGuess(bottom);
		setLastGuess(generateRandomNumber(bottom, maxGuess, lastGuess));
	};

	return (
		<View style={styles.screen}>
			<Text>{`Press LOWER or HIGHER buttons\n        to give the robot clues.`}</Text>
			<Card style={styles.card}>
				<Text>Robot Guess is</Text>
				<View style={styles.guessClueLayout}>
					<View style={ThemeStyles.buttonWrapperSmall}>
						<Button
							title="LOWER"
							onPress={guessLower}
							color={Theme.primaryColor}
						/>
					</View>
					<NumberContainer>{lastGuess}</NumberContainer>
					<View style={ThemeStyles.buttonWrapperSmall}>
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
