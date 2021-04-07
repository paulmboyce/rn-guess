import React, { useState, Fragment } from "react";
import {
	View,
	StyleSheet,
	Button,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from "react-native";

import { ThemeText } from "../components/themed";

import { Theme, ThemeStyles } from "../themes";
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

const StartGameScreen = (props) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [confirmed, setConfirmed] = useState(false);
	const [selectedValue, setSelectedValue] = useState(null);

	const onChangeTextHandler = (text) => {
		setEnteredValue(removeNonNumeric(text));
	};

	const removeNonNumeric = (text) => {
		return text.replace(/[^0-9]/g, "");
	};

	const resetInputHandler = () => {
		setEnteredValue("");
		setConfirmed(false);
	};

	const confirmInputHander = () => {
		const intValue = parseInt(enteredValue);
		if (isNaN(intValue) || intValue <= 0 || intValue > 99) {
			Alert.alert(
				`Oops, this value is not valid.`,
				"Valid numbers are between 1 and 99.\nPlease try again with a valid number.",
				[{ text: "Got it", onPress: resetInputHandler }]
			);
			return;
		}

		setEnteredValue("");
		setSelectedValue(intValue);
		setConfirmed(true);
	};

	const showInputBox = () => {
		return (
			<Fragment>
				<ThemeText>Enter a number:</ThemeText>
				<Input
					blurOnSubmit
					autoCapitalize="none"
					autoCorrect={false}
					maxLength={2}
					keyboardType="number-pad"
					style={styles.inputField}
					onChangeText={onChangeTextHandler}
					value={enteredValue}
				/>
			</Fragment>
		);
	};

	const showConfirmResetButtons = () => {
		return (
			<View style={styles.buttonLayout}>
				<View style={styles.buttonWrapper}>
					<Button
						title="Reset"
						color={Theme.secondaryColor}
						onPress={resetInputHandler}
					/>
				</View>
				<View style={styles.buttonWrapper}>
					<Button
						title="Confirm"
						color={Theme.primaryColor}
						onPress={confirmInputHander}
					/>
				</View>
			</View>
		);
	};

	const showStartButton = () => {
		return (
			<Fragment>
				<ThemeText>You selected:</ThemeText>
				<NumberContainer>{selectedValue}</NumberContainer>
				<View style={styles.buttonLayout}>
					<Button
						title="Start Game"
						color={Theme.primaryColor}
						onPress={() => {
							console.log("START!");
							props.onStartGame(selectedValue);
						}}
					/>
				</View>
			</Fragment>
		);
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.screen}>
				<ThemeText style={ThemeStyles.title}>Start a New Game!</ThemeText>

				<Card style={styles.inputContainer}>
					{!confirmed && showInputBox()}
					{!confirmed && showConfirmResetButtons()}
					{confirmed && showStartButton()}
				</Card>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		width: "100%",
		padding: 10,
		alignItems: "center",
		backgroundColor: Theme.backgroundColor,
	},

	inputContainer: {
		width: 330,
		maxWidth: "80%",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingVertical: 40,
	},
	inputField: {
		borderWidth: 1,
		width: "18%",
		textAlign: "center",
		fontSize: 18,
		fontFamily: Theme.fontFamilyBold,
		color: Theme.fontColor,
	},
	buttonLayout: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "center",
		marginTop: 15,
	},
	buttonWrapper: {
		marginHorizontal: 2,
		width: "45%",
	},
});
export default StartGameScreen;
