import { StyleSheet } from "react-native";

export const theme = {
	featureColor: "#f7287b",
	backgroundColor: "beige",
	shadowColor: "black",
	shadowOffset: { height: 2, width: 0 },
	shadowOpacity: 0.26,
	shadowRadius: 5,
	elevation: 6,
	shadowBorderRadius: 10,
};

export const themeStyles = StyleSheet.create({
	shadowBorder: {
		shadowColor: theme.shadowColor,
		shadowOffset: theme.shadowOffset,
		shadowOpacity: theme.shadowOpacity,
		shadowRadius: theme.shadowRadius,
		backgroundColor: theme.backgroundColor,
		elevation: theme.elevation,
		borderRadius: theme.shadowBorderRadius,
	},
});
