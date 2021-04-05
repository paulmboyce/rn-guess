import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { Theme } from "./themes";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
	const [isGameRunning, setIsGameRunning] = useState(false);
	const [isGameOver, setIsGameOver] = useState(false);
	const [gameNumber, setGameNumber] = useState(null);
	const [numTries, setNumTries] = useState(0);

	const handleStartGame = (selectedNumber) => {
		setGameNumber(selectedNumber);
		setIsGameRunning(true);
		setIsGameOver(false);
	};

	const handleOnClickEndGame = () => {
		handleOnClickNewGame();
	};

	const handleOnGameOver = (numTries) => {
		console.log(
			"REFACTOR 2 x boolean flags to 3 separate states, eg GAME_SETUP, GAME_RUNNING, GAME_OVER"
		);
		setIsGameRunning(false);
		setIsGameOver(true);
		setNumTries(numTries);
	};

	const handleOnClickNewGame = () => {
		setIsGameRunning(false);
		setIsGameOver(false);
	};

	const getCurrentScreen = () => {
		if (isGameRunning) {
			return (
				<GameScreen
					onGameOver={handleOnGameOver}
					onClickEndGame={handleOnClickEndGame}
					gameNumber={gameNumber}
				/>
			);
		}
		if (isGameOver) {
			return (
				<GameOverScreen
					numTries={numTries}
					onClickNewGame={handleOnClickNewGame}
				/>
			);
		}
		return <StartGameScreen onStartGame={handleStartGame} />;
	};

	return (
		<View style={styles.app}>
			<Header title="Best Dimentia App" />
			{getCurrentScreen()}
		</View>
	);
}

const styles = StyleSheet.create({
	app: {
		flex: 1,
		backgroundColor: Theme.backgroundColor,
		alignItems: "center",
	},
});
