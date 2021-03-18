import React, { useState } from "react";
import { View, StyleSheet, Text, Button, Alert } from "react-native";

import { Theme } from "../themes";

const generateRandomNumber = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);

	const random = Math.floor(Math.random() * (max - min) + min);
	if (random === exclude) {
		return generateRandomNumber(min, max, exclude);
	}

	return random;
};

const GameScreen = ({ gameNumber, onEndGame }) => {
	const [lastGuess, setLastGuess] = useState(
		generateRandomNumber(1, 100, gameNumber)
	);

	const [minGuess, setMinGuess] = useState(0);
	const [maxGuess, setMaxGuess] = useState(100);

	const checkForWin = () => {
		if (gameNumber === lastGuess) {
			console.log(`WIN! ${gameNumber} = ${lastGuess}`);
			return true;
		}
		return false;
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
			<Text>I am game screen!</Text>
			{checkForWin() && <Text>---- Game Over! ------</Text>}
			<Text>I guess {lastGuess}</Text>
			<Button
				title="Guess Lower"
				onPress={() => {
					guessLower();
				}}
			/>
			<Button
				title="Guess Higher"
				onPress={() => {
					guessHigher();
				}}
			/>
			<Button onPress={onEndGame} title="End Game" />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: Theme.backgroundColor,
	},
});

export default GameScreen;
