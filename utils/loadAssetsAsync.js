import * as Font from "expo-font";
import { Asset } from "expo-asset";
import {
	FontAwesome,
	MaterialIcons,
	Ionicons,
	AntDesign,
} from "@expo/vector-icons";

const _fetchFonts = async () => {
	console.log("Loading fonts...");
	return Font.loadAsync({
		"open-sans": require("../assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
		...FontAwesome.font,
		...MaterialIcons.font,
		...Ionicons.font,
		...AntDesign.font,
	});
};

const _cacheImagesAsync = async () => {
	const images = [require("../assets/summit.png")];
	console.log("Pre-loading images...");
	const cacheImages = images.map((image) => {
		return Asset.fromModule(image).downloadAsync();
	});
	return Promise.all(cacheImages);
};

const loadAssetsAsync = async () => {
	try {
		await _cacheImagesAsync();
		await _fetchFonts();
	} catch (err) {
		console.log("OOPS, problem loading assets.. ", err);
	}
};

export default loadAssetsAsync;
