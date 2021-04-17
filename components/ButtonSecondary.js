import React from "react";
import {
	View,
	TouchableOpacity,
	TouchableNativeFeedback,
	Platform,
} from "react-native";

import { ThemeText } from "./themed";
import { Theme, ThemeStyles } from "../themes";

let ButtonTouchable = TouchableOpacity;
if (Platform.OS === "android" && Platform.Version >= 21) {
	ButtonTouchable = TouchableNativeFeedback;
}

const ButtonSecondary = (props) => {
	const content = props.children || props.title || "";
	return (
		<ButtonTouchable {...props}>
			<View
				style={{
					...ThemeStyles.buttonContainer,
					backgroundColor: Theme.secondaryColor,
					...props.style,
				}}
			>
				<ThemeText style={{ ...ThemeStyles.button }}>{content}</ThemeText>
			</View>
		</ButtonTouchable>
	);
};

export default ButtonSecondary;
