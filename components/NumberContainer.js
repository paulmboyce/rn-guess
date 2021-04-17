import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";

import { Theme } from "../themes";
import { ThemeTextBold } from "../components/themed";

const NumberContainer = (props) => {
	const window = useWindowDimensions();

	const styles = StyleSheet.create({
		container: {
			alignItems: "center",
			paddingHorizontal: 10,
			paddingVertical: 10,
			marginVertical: window.height * 0.03,
			borderColor: Theme.secondaryColor,
			borderWidth: 1,
			borderRadius: 10,
		},
		text: {
			fontSize: 26,
			color: Theme.secondaryColor,
		},
	});

	return (
		<View style={{ ...styles.container, ...props.style }}>
			<ThemeTextBold style={styles.text}>{props.children}</ThemeTextBold>
		</View>
	);
};

export default NumberContainer;
