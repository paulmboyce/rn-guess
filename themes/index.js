import { StyleSheet } from "react-native";

const Colors = {
	primary: "#f7287b",
	secondary: "#c717fc",
	background: "linen",
	shadow: "black",
};

export const Theme = {
	primaryColor: Colors.primary,
	secondaryColor: Colors.secondary,
	backgroundColor: Colors.background,
	shadowColor: Colors.shadow,
	shadowOffset: { height: 2, width: 0 },
	shadowOpacity: 0.26,
	shadowRadius: 5,
	elevation: 6,
	shadowBorderRadius: 10,
};

export const ThemeStyles = StyleSheet.create({
	shadowBorder: {
		shadowColor: Theme.shadowColor,
		shadowOffset: Theme.shadowOffset,
		shadowOpacity: Theme.shadowOpacity,
		shadowRadius: Theme.shadowRadius,
		backgroundColor: Theme.backgroundColor,
		elevation: Theme.elevation,
		borderRadius: Theme.shadowBorderRadius,
	},
});
