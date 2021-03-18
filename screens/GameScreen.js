import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

import { Theme } from "../themes";

const GameScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>I am game screen!</Text>
			<Button onPress={props.onEndGame} title="End Game" />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: Theme.backgroundColor,
	},
});

export default GameScreen;
