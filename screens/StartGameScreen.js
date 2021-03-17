import React from "react";
import {
	View,
	StyleSheet,
	Text,
	TextInput,
	Button,
	TouchableHighlightComponent,
} from "react-native";

import { Theme } from "../themes";
import Card from "../components/Card";
import Input from "../components/Input";

const StartGameScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Start a New Game!</Text>
			<Card style={{ ...styles.inputContainer }}>
				<Text>Enter a number:</Text>
				<Input style={styles.inputField} />
				<View style={styles.buttonLayout}>
					<View style={styles.buttonWrapper}>
						<Button title="Reset" color={Theme.secondaryColor} />
					</View>
					<View style={styles.buttonWrapper}>
						<Button title="Confirm" color={Theme.primaryColor} />
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
		borderWidth: 1,
		width: "35%",
	},
	buttonLayout: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-between",
		marginTop: 15,
	},
	buttonWrapper: {
		width: "45%",
	},
});
export default StartGameScreen;
