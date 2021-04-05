import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
//import { Theme } from "./themes";
import GameOverScreen from "./screens/GameOverScreen";

const _fetchFonts = async () => {
	console.log("Loading fonts...");
	return Font.loadAsync({
		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
	});
};

let Theme,
	styles = {};

const _fetchThemeAndStyle = () => {
	console.log("Loading theme...");
	import("./themes")
		.then((result) => {
			Theme = result.Theme;
		})
		.then(() => {
			return new Promise((resolve, reject) => {
				try {
					console.log("Loading style..");
					styles = StyleSheet.create({
						screen: {
							flex: 1,
							backgroundColor: Theme.backgroundColor,
							alignItems: "center",
						},
						app: {
							fontFamily: Theme.fontFamily,
						},
					});
					console.log("Loaded styles: ", styles);
				} catch (err) {
					console.log("OOps: ", err);
				}
				//	resolve("OK");
			});
		})
		.catch((err) => {
			console.log("OOPS.. problem loading resources..", err);
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

function App() {
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
		if (isGameRunning) {
			return (
				<GameScreen
					onGameOver={handleOnGameOver}
					onClickEndGame={handleOnClickEndGame}
					gameNumber={gameNumber}
					style={styles.app}
				/>
			);
		}
		if (isGameOver) {
			return (
				<GameOverScreen
					numTries={numTries}
					onClickNewGame={handleOnClickNewGame}
					style={styles.app}
				/>
			);
		}
		return <StartGameScreen onStartGame={handleStartGame} style={styles.app} />;
	};

	if (!isReady) {
		return (
			<AppLoading
				startAsync={() => {
					return Promise.all([
						_cacheImagesAsync(),
						_fetchFonts(),
						_fetchThemeAndStyle(),
					]).catch((err) => {
						console.log("OOPS, problem loading assets..", err);
					});
				}}
				onFinish={() => {
					console.log("Loaded resources, starting app...");
					setIsReady(true);
				}}
				onError={console.warn}
			/>
		);
	} else {
		if (!styles.screen) {
			console.log(
				"Styles (using dynamically loaded Theme) are not ready (DUE TO Fast Refresh). Going to force refresh of assets..."
			);
			setIsReady(false);
		}

		return (
			<View style={styles.screen}>
				<Header title="Best Game Ever" style={styles.app} />
				{getCurrentScreen()}
			</View>
		);
	}
}

export default App;
