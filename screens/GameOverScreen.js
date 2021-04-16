import React from "react";
import {
	View,
	StyleSheet,
	Image,
	Dimensions,
	ScrollView,
	useWindowDimensions,
} from "react-native";

import { Theme, ThemeStyles } from "../themes";
import {
	ThemeText,
	ThemeTextTitle,
	ThemeTextHighlight,
} from "../components/themed";
import ButtonPrimary from "../components/ButtonPrimary";

const GameOverScreen = ({ numTries, onClickNewGame }) => {
	const window = useWindowDimensions();
	const landScape = window.width > window.height;
	const imageSize = landScape ? window.height * 0.25 : window.width * 0.5;

	const styles = StyleSheet.create({
		windowSize: {
			width: window.width,
			height: window.height,
		},
		imageContainer: {
			width: imageSize,
			height: imageSize,
			marginTop: landScape ? 20 : 100,
			borderRadius: imageSize * 0.5,
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
	return (
		<View style={{ ...ThemeStyles.screen, ...styles.windowSize }}>
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

export default GameOverScreen;
