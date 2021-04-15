import React, { useState, Fragment } from "react";
import {
	View,
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
	Dimensions,
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

	const showInputForm = () => {
		return (
			<Card style={styles.cardStyle}>
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
				<View style={styles.buttonLayout}>
					<View style={styles.buttonWrapper}>
						<ButtonSecondary title="Reset" onPress={resetInputHandler} />
					</View>
					<View style={styles.buttonWrapper}>
						<ButtonPrimary title="Confirm" onPress={confirmInputHander} />
					</View>
				</View>
			</Card>
		);
	};

	const showStartButton = () => {
		return (
			<Card style={styles.cardStyle}>
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
			</Card>
		);
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={ThemeStyles.screen}>
				<ThemeTextTitle>Start a New Game!</ThemeTextTitle>
				{!confirmed && showInputForm()}
				{confirmed && showStartButton()}
				<View style={ThemeStyles.box2}></View>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	cardStyle: {
		minHeight: 10,
		marginTop: 40,
	},
	inputField: {
		width: "18%",
		textAlign: "center",
		fontFamily: Theme.fontFamilyBold,
		color: Theme.secondaryColor,
	},
	buttonLayout: {
		flexDirection: "row",
		justifyContent: "center",
		width: "100%",
	},
	startGameButton: {
		marginBottom: 10,
	},
	buttonWrapper: {
		marginHorizontal: 2,
		width: "45%",
	},
});
export default StartGameScreen;
