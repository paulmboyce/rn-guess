import React from "react";
import { View, StyleSheet, Text } from "react-native";

const StartGameScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>StartGameScreen</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		justifyContent: "center",
		alignItems: "center",
	},
});
export default StartGameScreen;
