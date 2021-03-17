import React from "react";
import { View, StyleSheet } from "react-native";

import { themeStyles } from "../themes";

const Card = (props) => {
	return (
		<View style={{ ...styles.card, ...themeStyles.shadowBorder }}>
			{props.children}
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		width: 300,
		maxWidth: "80%",
		alignItems: "center",
		padding: 20,
	},
});

export default Card;
