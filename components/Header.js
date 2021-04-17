import React from "react";
import { View, StyleSheet, Platform, useWindowDimensions } from "react-native";

import { Theme } from "../themes";
import { ThemeTextBold } from "../components/themed";

const paddingTop = Platform.OS === "ios" ? 36 : 18;

const Header = ({ title }) => {
	const window = useWindowDimensions();
	const landScape = window.width > window.height;

	const isIOS = Platform.OS === "ios";

	const styles = StyleSheet.create({
		header: {
			width: "100%",
			height: landScape ? 63 : 64 + paddingTop,
			paddingTop: landScape ? 20 : paddingTop,
			backgroundColor: isIOS ? Theme.backgroundColor : Theme.primaryColor,
			justifyContent: "center",
			alignItems: "center",
			borderBottomColor: Theme.primaryColor,
			borderBottomWidth: isIOS ? 1 : 0,
		},
		text: {
			color: isIOS ? Theme.primaryColor : Theme.backgroundColor,
			fontSize: 24,
		},
	});

	return (
		<View style={styles.header}>
			<ThemeTextBold style={styles.text}>{title}</ThemeTextBold>
		</View>
	);
};

export default Header;
