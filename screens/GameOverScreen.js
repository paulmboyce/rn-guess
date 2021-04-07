import React from "react";
import { View, StyleSheet, Button } from "react-native";

import { Theme, ThemeStyles } from "../themes";
import { ThemeText } from "../components/themed";

const GameOverScreen = ({ numTries, onClickNewGame }) => {
	return (
		<View style={styles.screen}>
			<View style={{ flex: 1, justifyContent: "center" }}>
				<ThemeText style={ThemeStyles.title}>
					Game Over in {numTries} rounds!
				</ThemeText>
			</View>
			<View style={{ flex: 2, alignItems: "center" }}>
				<ThemeText>Want to play again?</ThemeText>
				<View style={{ paddingTop: 20 }}>
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
