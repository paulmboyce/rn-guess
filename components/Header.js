import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import { Theme } from "../themes";

const Header = ({ title, style }) => {
	return (
		<View style={(style, styles.header)}>
			<Text style={(style, styles.title)}>{title}</Text>
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
		fontFamily: Theme.fontFamilyBold,
		fontSize: 24,
		paddingHorizontal: 10,
	},
});

export default Header;
