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
			<Card style={{ ...styles.inputContainer }}>
				<Text>Enter a number:</Text>
				<TextInput style={styles.inputField} />
				<View style={styles.buttonLayout}>
					<View style={styles.buttonContainer}>
						<Button title="Reset" />
					</View>
					<View style={styles.buttonContainer}>
						<Button title="Confirm" />
					</View>
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
	inputContainer: {
		width: 330,
		maxWidth: "80%",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingVertical: 40,
	},

	inputField: {
		marginVertical: 10,
		borderBottomWidth: 2,
		width: "35%",
	},
	buttonLayout: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-between",
		marginTop: 15,
	},
	buttonContainer: {
		width: "45%",
	},
});
export default StartGameScreen;
