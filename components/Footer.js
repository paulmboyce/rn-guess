import React from "react";
import { View, StyleSheet, Platform, Dimensions } from "react-native";

import { Theme } from "../themes";
import { ThemeText } from "../components/themed";

const Footer = () => {
	if (Dimensions.get("window").height < 600) {
		return null;
	}

	return (
		<View style={styles.footer}>
			<ThemeText style={styles.text}>Platform is: {Platform.OS}</ThemeText>
		</View>
	);
};

const styles = StyleSheet.create({
	footer: {
		width: Dimensions.get("window").width,
		backgroundColor: "grey",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: -5,
	},
	text: {
		color: "white",
		fontSize: 12,
	},
});

export default Footer;
