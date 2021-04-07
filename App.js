import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
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

	if (!isAppReady) {
		return (
			<AppLoading
				startAsync={initAssetsThemeStylesAsync}
				onFinish={() => {
					console.log("Finished loading resources. Starting app... ");
					setIsAppReady(true);
				}}
				onError={console.warn}
			/>
		);
	}

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

	const renderCurrentScreen = () => {
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
					style={styles.app}
				/>
			);
		}
		return <StartGameScreen onStartGame={handleStartGame} />;
	};

	return (
		<View style={styles.screen}>
			<Header title="Best Fun Game Ever" />
			{renderCurrentScreen()}
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
});
export default App;
