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
		alignItems: "center",
		paddingHorizontal: 10,
		paddingVertical: 10,
		marginVertical: 25,
		borderColor: Theme.secondaryColor,
		borderWidth: 1,
		borderRadius: 10,
	},
	text: {
		fontWeight: "700",
		fontSize: 26,
		color: Theme.secondaryColor,
	},
});
export default NumberContainer;
