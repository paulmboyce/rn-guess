import React from "react";
import { View, TouchableOpacity } from "react-native";

import { ThemeText } from "./themed";
import { Theme, ThemeStyles } from "../themes";

const ButtonSecondary = (props) => {
	const content = props.title || "";
	return (
		<TouchableOpacity {...props}>
			<View
				style={{
					...ThemeStyles.buttonContainer,
					backgroundColor: Theme.secondaryColor,
					...props.style,
				}}
			>
				<ThemeText style={{ ...ThemeStyles.button }}>{content}</ThemeText>
			</View>
		</TouchableOpacity>
	);
};

export default ButtonSecondary;
