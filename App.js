import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
	return (
		<View style={styles.app}>
			<Header title="Best Dimentia App" />
			<StartGameScreen />
		</View>
	);
}

const styles = StyleSheet.create({
	app: {
		flex: 1,
		backgroundColor: "beige",
		alignItems: "center",
	},
});
