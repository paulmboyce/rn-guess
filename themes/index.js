import { StyleSheet, Dimensions } from "react-native";

const Fonts = {
	family: "open-sans",
	familyBold: "open-sans-bold",
};

const Colors = {
	primary: "#f7287b",
	secondary: "#c717fc",
	background: "linen",
	backgroundHighlight: "pink",
	shadow: "black",
	borderColor: "grey",
	titleColor: "black",
	fontColor: "black",
};

const DarkColors = {
	primary: "green",
	secondary: "grey",
	background: "black",
	backgroundHighlight: "teal",
	shadow: "grey",
	borderColor: "linen",
	titleColor: "white",
	fontColor: "white",
};

export const Theme = {
	primaryColor: Colors.primary,
	secondaryColor: Colors.secondary,
	titleColor: Colors.titleColor,
	fontColor: Colors.fontColor,
	backgroundColor: Colors.background,
	backgroundHighlightColor: Colors.backgroundHighlight,
	borderColor: Colors.borderColor,
	borderWidth: 1,
	shadowColor: Colors.shadow,
	shadowOffset: { height: 2, width: 0 },
	shadowOpacity: 0.26,
	shadowRadius: 5,
	elevation: 6,
	shadowBorderRadius: 10,
	fontFamily: Fonts.family,
	fontFamilyBold: Fonts.familyBold,
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
	buttonWrapperSmall: {
		marginHorizontal: 4,
		minWidth: "30%",
	},
	title: {
		fontSize: 22,
		color: Theme.titleColor,
		fontFamily: Theme.fontFamilyBold,
	},
	text: {
		fontFamily: Theme.fontFamily,
		color: Theme.fontColor,
	},
	input: {
		borderWidth: 1,
		margin: 10,
		paddingHorizontal: 6,
		height: 35,
		fontSize: 18,
		fontFamily: Theme.fontFamily,
		color: Theme.fontColor,
		borderColor: Theme.borderColor,
		borderRadius: 2,
	},
	screen: {
		flex: 1,
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
		padding: 5,
		justifyContent: "flex-start",
		alignItems: "center",
		backgroundColor: Theme.backgroundColor,
	},
	box1: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	box2: {
		flex: 2,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonContainer: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Theme.primaryColor,
		fontFamily: Theme.fontFamily,
		padding: 8,
		borderRadius: 5,
		overflow: "hidden",
	},
	button: {
		fontSize: 18,
		color: "white",
	},
});
