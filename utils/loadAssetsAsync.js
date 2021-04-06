import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import { Asset } from "expo-asset";

const _fetchFonts = async () => {
	console.log("Loading fonts...");
	return Font.loadAsync({
		"open-sans": require("../assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
	});
};

const _fetchThemeAndStyle = (setStyles) => {
	console.log("Loading theme...");
	import("../themes")
		.then((result) => {
			Theme = result.Theme;

			try {
				console.log("Loading style..");
				styles = StyleSheet.create({
					screen: {
						flex: 1,
						backgroundColor: Theme.backgroundColor,
						alignItems: "center",
					},
					app: {
						fontFamily: Theme.fontFamily,
					},
				});
				console.log("Saving styles to STATE (to survive re-renders):");
				setStyles(styles);
			} catch (err) {
				console.log("Oops: ", err);
			}
		})
		.catch((err) => {
			console.log("OOPS.. problem loading resources..", err);
		});
};

const _cacheImagesAsync = async () => {
	const images = [require("../assets/favicon.png")];
	console.log("Loading images to cache...");
	const cacheImages = images.map((image) => {
		return Asset.fromModule(image).downloadAsync();
	});
	return Promise.all(cacheImages);
};

const initAssetsThemeStylesAsync = async (setStyles) => {
	try {
		await _cacheImagesAsync();
		await _fetchFonts();
		_fetchThemeAndStyle(setStyles);
	} catch (err) {
		console.log("OOPS, problem loading assets..", err);
	}
};

export default initAssetsThemeStylesAsync;
