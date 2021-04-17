import React, { useState } from "react";
import { View, StyleSheet, Platform, SafeAreaView } from "react-native";
import AppLoading from "expo-app-loading";

import Header from "./components/Header";
import Footer from "./components/Footer";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import loadAssetsAsync from "./utils/loadAssetsAsync";

function App() {
	const [isAppReady, setIsAppReady] = useState(false);
	const [isGameRunning, setIsGameRunning] = useState(false);
	const [isGameOver, setIsGameOver] = useState(false);
	const [gameNumber, setGameNumber] = useState(null);
	const [numTries, setNumTries] = useState(0);

	if (!isAppReady) {
		return (
			<AppLoading
				startAsync={loadAssetsAsync}
				onFinish={() => {
					console.log(
						`Finished loading resources. Starting app on [${Platform.OS}]... `
					);
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
		<SafeAreaView style={styles.screen}>
			<Header title="Best Fun Game Ever" />
			{renderCurrentScreen()}
			<Footer />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
});
export default App;
