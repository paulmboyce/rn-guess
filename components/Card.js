import React from "react";
import { View, StyleSheet } from "react-native";

import { ThemeStyles } from "../themes";

const Card = ({ style, children }) => {
	return (
		<View
			style={{
				...styles.default,
				...ThemeStyles.shadowBorder,
				...style,
			}}
		>
			{children}
		</View>
	);
};

const styles = StyleSheet.create({
	default: {
		width: 300,
		maxWidth: "80%",
		alignItems: "center",
		padding: 20,
	},
});
export default Card;
