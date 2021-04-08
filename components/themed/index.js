import React from "react";
import { Text, TextInput } from "react-native";
import { Theme, ThemeStyles } from "../../themes";

const ThemeText = (props) => {
	const style = { ...ThemeStyles.text, ...props.style };
	return (
		<Text {...props} style={style}>
			{props.children}
		</Text>
	);
};

const ThemeTextBold = (props) => {
	const style = { fontFamily: Theme.fontFamilyBold, ...props.style };
	return (
		<ThemeText {...props} style={style}>
			{props.children}
		</ThemeText>
	);
};

const ThemeInput = (props) => {
	const style = { ...ThemeStyles.input, ...props.style };
	return <TextInput {...props} style={style} />;
};

export { ThemeText, ThemeTextBold, ThemeInput };
