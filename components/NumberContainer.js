import React from "react";
import { View, StyleSheet } from "react-native";

import { Theme } from "../themes";
import { ThemeTextBold } from "../components/themed";

const NumberContainer = (props) => {
	return (
		<View style={styles.container}>
			<ThemeTextBold style={styles.text}>{props.children}</ThemeTextBold>
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
		fontSize: 26,
		color: Theme.secondaryColor,
	},
});
export default NumberContainer;
