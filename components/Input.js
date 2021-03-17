import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { Theme } from "../themes";

const Input = ({ style }) => {
	return <TextInput style={{ ...styles.input, ...style }} />;
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
