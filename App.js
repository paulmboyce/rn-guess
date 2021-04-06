import React, { useState } from "react";
import { View } from "react-native";
import AppLoading from "expo-app-loading";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import initAssetsThemeStylesAsync from "./utils/loadAssetsAsync";

function App() {
	const [isAppReady, setIsAppReady] = useState(false);
	const [isGameRunning, setIsGameRunning] = useState(false);
	const [isGameOver, setIsGameOver] = useState(false);
	const [gameNumber, setGameNumber] = useState(null);
	const [numTries, setNumTries] = useState(0);
	const [styles, setStyles] = useState({});

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

	if (!isAppReady) {
		return (
			<AppLoading
				startAsync={() => initAssetsThemeStylesAsync(setStyles)}
				onFinish={() => {
					console.log("Finished loading resources. Starting app... ");
					setIsAppReady(true);
				}}
				onError={console.warn}
			/>
		);
	} else {
		console.log("Rendering app (with loaded styles)...");
		return (
			<View style={styles.screen}>
				<Header title="Best Fun Game Ever" style={styles.app} />
				{getCurrentScreen()}
			</View>
		);
	}
}

export default App;
