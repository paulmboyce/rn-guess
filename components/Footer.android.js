import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";

import { Theme } from "../themes";
import { ThemeText } from "../components/themed";

const Footer = () => {
	const styles = StyleSheet.create({
		footer: {
			width: useWindowDimensions().width,
			backgroundColor: Theme.backgroundColor,
			justifyContent: "center",
			alignItems: "center",
		},
		text: {
			color: Theme.primaryColor,
			fontSize: 12,
		},
	});

	return (
		<View style={styles.footer}>
			<ThemeText style={styles.text}>We love ANDROID</ThemeText>
		</View>
	);
};

export default Footer;
