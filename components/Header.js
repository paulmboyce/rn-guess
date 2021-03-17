import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import { Theme } from "../themes";

const Header = (props) => {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>{props.title}</Text>
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
	title: {
		color: "white",
		fontWeight: "600",
		fontSize: 24,
		paddingHorizontal: 10,
	},
});

export default Header;
