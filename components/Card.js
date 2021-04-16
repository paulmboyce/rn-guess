import React from "react";
import {
	View,
	StyleSheet,
	Dimensions,
	useWindowDimensions,
} from "react-native";

import { ThemeStyles } from "../themes";

const Card = ({ style, children }) => {
	const window = useWindowDimensions();

	const styles = StyleSheet.create({
		default: {
			marginVertical: 10,
			width: window.width * 0.8,
			minHeight: window.height * 0.3,
			justifyContent: "center",
			alignItems: "center",
			padding: 20,
		},
	});

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

export default Card;
