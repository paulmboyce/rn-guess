import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import { ThemeStyles } from "../themes";
import { render } from "react-dom";

const Card = ({ style, children }) => {
	console.log("RENDER: Card");
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
		marginVertical: 10,
		width: Dimensions.get("window").width * 0.8,
		minHeight: Dimensions.get("window").height * 0.3,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
	},
});
export default Card;
