import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { Theme } from "../themes";

const Input = (props) => {
	return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
	input: {
		margin: 10,
		height: 35,
		width: 80,
		borderRadius: 2,
		borderColor: Theme.borderColor,
	},
});

export default Input;
