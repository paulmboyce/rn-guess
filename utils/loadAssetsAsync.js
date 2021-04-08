import * as Font from "expo-font";
import { Asset } from "expo-asset";

const _fetchFonts = async () => {
	console.log("Loading fonts...");
	return Font.loadAsync({
		"open-sans": require("../assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
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

const initAssetsThemeStylesAsync = async () => {
	try {
		await _cacheImagesAsync();
		await _fetchFonts();
	} catch (err) {
		console.log("OOPS, problem loading assets.. ", err);
	}
};

export default initAssetsThemeStylesAsync;
