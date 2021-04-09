import React from "react";
import { View, TouchableOpacity } from "react-native";

import { ThemeText } from "./themed";
import { ThemeStyles } from "../themes";

const ButtonPrimary = (props) => {
	const content = props.children || props.title || "";
	return (
		<TouchableOpacity {...props}>
			<View style={{ ...ThemeStyles.buttonContainer, ...props.style }}>
				<ThemeText {...props} style={{ ...ThemeStyles.button }}>
					{content}
				</ThemeText>
			</View>
		</TouchableOpacity>
	);
};

export default ButtonPrimary;
