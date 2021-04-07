import React from "react";
import { Text } from "react-native";
import { ThemeStyles } from "../../themes";

const ThemeText = (props) => {
	return (
		<Text style={{ ...ThemeStyles.text, ...props.style }}>
			{props.children}
		</Text>
	);
};

const ThemeTextBold = (props) => {
	return (
		<ThemeText style={{ fontFamily: Theme.fontFamilyBold, ...props.style }}>
			{props.children}
		</ThemeText>
	);
};

export { ThemeText, ThemeTextBold };
