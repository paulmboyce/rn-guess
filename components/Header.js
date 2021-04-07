import React from "react";
import { View, StyleSheet, Platform } from "react-native";

import { Theme } from "../themes";
import { ThemeTextBold } from "../components/themed";

const Header = ({ title }) => {
	return (
		<View style={styles.header}>
			<ThemeTextBold style={styles.text}>{title}</ThemeTextBold>
		</View>
	);
};

const paddingTop = Platform.OS === "ios" ? 36 : 18;

const styles = StyleSheet.create({
	header: {
		width: "100%",
		height: 64 + paddingTop,
		paddingTop: paddingTop,
		backgroundColor: Theme.primaryColor,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: "white",
		fontSize: 24,
	},
});

export default Header;
