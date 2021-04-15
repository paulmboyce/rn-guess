import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Alert, FlatList } from "react-native";
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

const renderListItem = (numGuesses, { item, index }) => {
	return (
		<View style={styles.listItem}>
			<ThemeTextHighlight>
				Guess #{(numGuesses - index).toString()} - {item.value}
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
		setGuesses((currentGuesses) => [
			...currentGuesses,
			{ id: Math.random().toString(), value: lastGuess.toString() },
		]);
	}, [lastGuess]);

	const reversedGuesses = () => {
		return guesses.reverse();
	};

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
			<View style={ThemeStyles.box2}>
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
			<View style={{ ...ThemeStyles.box1, width: "60%" }}>
				{/* The bind (below) passes guesses.length as the 1st param to
				    renderListItem. The item passed by FlatList is 2nd param */}
				<FlatList
					horizontal={true}
					contentContainerStyle={styles.scrollContainer}
					data={reversedGuesses()}
					keyExtractor={(item) => item.id}
					renderItem={renderListItem.bind(null, guesses.length)}
				></FlatList>
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
	scrollContainer: {
		flexGrow: 1,
		marginTop: 40,
		justifyContent: "center",
	},
	listItem: {
		height: 50,
		marginRight: 3,
		paddingHorizontal: 60,
		paddingVertical: 5,
		borderColor: Theme.borderColor,
		borderWidth: Theme.borderWidth,
		borderRadius: 3,
		justifyContent: "center",
	},
});

export default GameScreen;
