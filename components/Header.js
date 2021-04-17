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
		headerBase: {
			width: "100%",
			height: landScape ? 63 : 64 + paddingTop,
			paddingTop: landScape ? 20 : paddingTop,
			justifyContent: "center",
			alignItems: "center",
		},
		headerIOS: {
			backgroundColor: Theme.backgroundColor,
			borderBottomColor: Theme.primaryColor,
			borderBottomWidth: 1,
		},
		headerAndroid: {
			backgroundColor: Theme.primaryColor,
		},
		text: {
			color: isIOS ? Theme.primaryColor : Theme.backgroundColor,
			fontSize: 24,
		},
	});

	return (
		<View
			style={{
				...styles.headerBase,
				...Platform.select({
					ios: styles.headerIOS,
					android: styles.headerAndroid,
				}),
			}}
		>
			<ThemeTextBold style={styles.text}>{title}</ThemeTextBold>
		</View>
	);
};

export default Header;
