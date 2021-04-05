import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { Theme } from "./themes";
import GameOverScreen from "./screens/GameOverScreen";

const _fetchFonts = async () => {
	console.log("Loading fonts...");
	return Font.loadAsync({
		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
	});
};

const _cacheImagesAsync = async () => {
	const images = [require("./assets/favicon.png")];
	console.log("Loading images to cache...");
	const cacheImages = images.map((image) => {
		return Asset.fromModule(image).downloadAsync();
	});
	return Promise.all(cacheImages);
};

export default function App() {
	const [isReady, setIsReady] = useState(false);
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
		if (!isReady) {
			return (
				<AppLoading
					startAsync={() => {
						return Promise.all([_cacheImagesAsync(), _fetchFonts()]);
					}}
					onFinish={() => {
						console.log("Loaded resources, starting app...");
						setIsReady(true);
					}}
					onError={console.warn}
				/>
			);
		}
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
