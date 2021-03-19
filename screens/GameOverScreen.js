import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

import { Theme, ThemeStyles } from "../themes";

const GameOverScreen = ({ onClickNewGame }) => {
	return (
		<View style={styles.screen}>
			<View style={{ flex: 1, justifyContent: "center" }}>
				<Text style={ThemeStyles.title}>Game Over!</Text>
			</View>
			<View style={{ flex: 2 }}>
				<Text>Want to play again?</Text>
				<Text> </Text>
				<Button
					onPress={onClickNewGame}
					title="PLAY AGAIN"
					color={Theme.primaryColor}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		width: "100%",
		padding: 10,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Theme.backgroundColor,
	},
	title: {},
});
export default GameOverScreen;
