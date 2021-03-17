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
import Card from "../components/Card";

const StartGameScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Start a New Game!</Text>
			<Card style={{ ...styles.inputContainer, ...themeStyles.shadowBorder }}>
				<Text>Enter a number:</Text>
				<TextInput style={styles.inputField} />
				<View style={styles.buttonContainer}>
					<Button style={styles.button} title="Reset" />
					<Button style={styles.button} title="Confirm" />
				</View>
			</Card>
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
