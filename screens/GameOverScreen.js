import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

import { Theme, ThemeStyles } from "../themes";

const GameOverScreen = ({ style, numTries, onClickNewGame }) => {
	return (
		<View style={(style, styles.screen)}>
			<View style={(style, { flex: 1, justifyContent: "center" })}>
				<Text style={(style, ThemeStyles.title)}>
					Game Over in {numTries} rounds!
				</Text>
			</View>
			<View style={(style, { flex: 2, alignItems: "center" })}>
				<Text style={(style, ThemeStyles.text)}>Want to play again?</Text>
				<View style={(style, { paddingTop: 20 })}>
					<Button
						onPress={onClickNewGame}
						title="PLAY AGAIN"
						color={Theme.primaryColor}
					/>
				</View>
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
