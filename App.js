import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { Theme } from "./themes";

export default function App() {
	const [isGameRunning, setIsGameRunning] = useState(false);
	const [gameNumber, setGameNumber] = useState(null);

	const handleStartGame = (selectedNumber) => {
		setGameNumber(selectedNumber);
		setIsGameRunning(true);
	};

	const handleOnEndGame = () => {
		setIsGameRunning(false);
	};

	return (
		<View style={styles.app}>
			<Header title="Best Dimentia App" />

			{!isGameRunning && <StartGameScreen onStartGame={handleStartGame} />}
			{isGameRunning && (
				<GameScreen onEndGame={handleOnEndGame} gameNumber={gameNumber} />
			)}
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
