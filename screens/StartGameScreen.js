import React from "react";
import {
	View,
	StyleSheet,
	Text,
	TextInput,
	Button,
	TouchableHighlightComponent,
} from "react-native";

import { theme, themeStyles } from "../themes";

const StartGameScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Start a New Game!</Text>
			<View style={{ ...styles.inputContainer, ...themeStyles.shadowBorder }}>
				<Text>Enter a number:</Text>
				<TextInput style={styles.inputField} />
				<View style={styles.buttonContainer}>
					<Button style={styles.button} title="Reset" />
					<Button style={styles.button} title="Confirm" />
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: "center",
	},
	title: {
		fontSize: 22,
		fontWeight: "600",
		marginVertical: 50,
	},
	inputContainer: {
		width: 300,
		maxWidth: "80%",
		alignItems: "center",
		padding: 20,
	},

	inputField: {
		marginTop: 10,
		borderBottomWidth: 2,
	},
	buttonContainer: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-between",
		marginTop: 15,
		paddingHorizontal: 15,
	},
	button: {
		marginHorizontal: 3,
	},
});
export default StartGameScreen;
