import React, { useState, Fragment } from "react";
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
			{checkForWin() ? (
				<Fragment>
					<Text>---- Game Over! ------</Text>
					<Button onPress={onEndGame} title="New Game" />
				</Fragment>
			) : (
				<Fragment>
					<Text>Press UP or DOWN to give the robot clues!</Text>
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
						onPress={onEndGame}
						title="End Game"
						color={Theme.secondaryColor}
					/>
				</Fragment>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
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
		width: "100%",
		padding: 10,
	},
});

export default GameScreen;
