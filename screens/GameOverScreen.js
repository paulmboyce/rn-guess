import React from "react";
import { View, StyleSheet, Button, Image } from "react-native";

import { Theme, ThemeStyles } from "../themes";
import { ThemeText, ThemeTextTitle } from "../components/themed";

const GameOverScreen = ({ numTries, onClickNewGame }) => {
	return (
		<View style={ThemeStyles.screen}>
			<View style={ThemeStyles.box1}>
				<View style={{ ...styles.imageContainer }}>
					<Image
						style={styles.image}
						source={require("../assets/summit.png")}
					/>
				</View>
				<ThemeTextTitle>Game Over in {numTries} rounds!</ThemeTextTitle>
			</View>
			<View style={ThemeStyles.box1}>
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
	imageContainer: {
		width: 200,
		height: 200,
		marginTop: 100,
		borderRadius: 100,
		borderWidth: 5,
		borderColor: Theme.primaryColor,
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: "100%",
		resizeMode: "stretch",
	},
});
export default GameOverScreen;
