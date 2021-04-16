import React from "react";
import { Text, TextInput, useWindowDimensions } from "react-native";
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

const ThemeTextTitle = (props) => {
	const window = useWindowDimensions();
	const marginTop = window.height * 0.05;
	const style = { ...ThemeStyles.title, marginTop: marginTop, ...props.style };
	return (
		<ThemeText {...props} style={style}>
			{props.children}
		</ThemeText>
	);
};

const ThemeTextHighlight = (props) => {
	const style = { color: Theme.primaryColor, ...props.style };
	return (
		<ThemeTextBold {...props} style={style}>
			{props.children}
		</ThemeTextBold>
	);
};

const ThemeInput = (props) => {
	const style = { ...ThemeStyles.input, ...props.style };
	return <TextInput {...props} style={style} />;
};

export {
	ThemeText,
	ThemeTextBold,
	ThemeTextTitle,
	ThemeTextHighlight,
	ThemeInput,
};
