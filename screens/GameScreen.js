import React, { useState, useEffect, useRef } from "react";
import {
	View,
	StyleSheet,
	Alert,
	FlatList,
	Dimensions,
	ScrollView,
} from "react-native";
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

let flatListRef;
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
		flatListRef.scrollToIndex({ animated: true, index: 0 });
	};

	const guessHigher = () => {
		if (lastGuess > gameNumber) {
			showCheatAlert();
			return;
		}
		const bottom = Math.max(minGuess.current, lastGuess);
		minGuess.current = bottom;
		setLastGuess(generateRandomNumber(bottom, maxGuess.current, lastGuess));
		flatListRef.scrollToIndex({ animated: true, index: 0 });
	};

	return (
		<ScrollView>
			<View style={ThemeStyles.screen}>
				<ThemeText style={styles.howToPlay}>
					Press DOWN or UP button to give the robot clues.
				</ThemeText>
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
				<View
					style={{
						...ThemeStyles.box1,
						width: Dimensions.get("window").width * 0.6,
					}}
				>
					{/* The bind (below) passes guesses.length as the 1st param to
				    renderListItem. The item passed by FlatList is 2nd param */}
					<FlatList
						horizontal={true}
						contentContainerStyle={styles.scrollContainer}
						data={reversedGuesses()}
						keyExtractor={(item) => item.id}
						renderItem={renderListItem.bind(null, guesses.length)}
						ref={(ref) => {
							flatListRef = ref;
						}}
					></FlatList>
				</View>
				<View style={ThemeStyles.box1}>
					<ButtonSecondary
						onPress={onClickEndGame}
						title="End Game"
						color={Theme.secondaryColor}
					/>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	guessClueLayout: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	card: {
		maxWidth: "80%",
		padding: 10,
	},
	howToPlay: {
		fontSize: Dimensions.get("window").height > 600 ? 20 : 16,
		textAlign: "center",
		paddingHorizontal: 50,
		paddingTop: 30,
		paddingBottom: 10,
	},
	scrollContainer: {
		flexGrow: 1,
		marginTop: 40,
		justifyContent: "center",
	},
	listItem: {
		justifyContent: "center",
		alignItems: "center",
		width: Dimensions.get("window").width * 0.55,
		maxHeight: 40,
		marginBottom: 20,
		marginRight: 2,
		borderColor: Theme.borderColor,
		borderWidth: Theme.borderWidth,
		borderRadius: 3,
	},
});

export default GameScreen;
