import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Theme } from "../themes";

const NumberContainer = (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{props.children}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "30%",
		maxWidth: "80%",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingVertical: 10,
		marginVertical: 25,
		borderColor: Theme.primaryColor,
		borderWidth: 2,
		borderRadius: 10,
	},
	text: {
		fontWeight: "700",
		fontSize: 26,
		color: Theme.primaryColor,
	},
});
export default NumberContainer;
