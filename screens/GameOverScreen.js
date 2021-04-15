import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";

import { Theme, ThemeStyles } from "../themes";
import {
	ThemeText,
	ThemeTextTitle,
	ThemeTextHighlight,
} from "../components/themed";
import ButtonPrimary from "../components/ButtonPrimary";

const GameOverScreen = ({ numTries, onClickNewGame }) => {
	console.log("RENDER: GameOverScreen..");
	return (
		<View style={ThemeStyles.screen}>
			<View style={ThemeStyles.box1}>
				<View style={{ ...styles.imageContainer }}>
					<Image
						style={styles.image}
						source={require("../assets/summit.png")}
					/>
				</View>
				<ThemeTextTitle>
					Game over in <ThemeTextHighlight>{numTries}</ThemeTextHighlight>{" "}
					rounds!
				</ThemeTextTitle>
			</View>
			<View style={ThemeStyles.box1}>
				<ThemeText style={styles.text}>Want to play again?</ThemeText>
				<View style={{ paddingTop: 20 }}>
					<ButtonPrimary onPress={onClickNewGame} title="PLAY AGAIN" />
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	imageContainer: {
		width: Dimensions.get("window").width * 0.5,
		height: Dimensions.get("window").width * 0.5,
		marginTop: 100,
		borderRadius: Dimensions.get("window").width * 0.25,
		borderWidth: 5,
		borderColor: Theme.primaryColor,
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: "105%",
		resizeMode: "cover",
	},
	text: {
		fontSize: 18,
	},
});
export default GameOverScreen;
