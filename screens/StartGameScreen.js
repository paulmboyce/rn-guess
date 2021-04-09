import React, { useState, Fragment } from "react";
import {
	View,
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from "react-native";

import { ThemeText, ThemeTextTitle, ThemeInput } from "../components/themed";
import { Theme, ThemeStyles } from "../themes";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";

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
				<ThemeInput
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
					<ButtonSecondary title="Reset" onPress={resetInputHandler} />
				</View>
				<View style={styles.buttonWrapper}>
					<ButtonPrimary title="Confirm" onPress={confirmInputHander} />
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
					<ButtonPrimary
						title="Start Game"
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
			<View style={ThemeStyles.screen}>
				<ThemeTextTitle>Start a New Game!</ThemeTextTitle>

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
	inputContainer: {
		width: 330,
		maxWidth: "80%",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingVertical: 40,
	},
	inputField: {
		width: "18%",
		textAlign: "center",
		fontFamily: Theme.fontFamilyBold,
		color: Theme.secondaryColor,
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
