import { useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal, Image } from "react-native";

function GoalInput(props) {
  const [goalText, setGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(goalText);
    setGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder="Начните печатать.."
          onChangeText={goalInputHandler}
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Добавить" onPress={addGoalHandler} color="#7c32c5"/>
          </View>
          <View style={styles.button}>
            <Button title="Закрыть" onPress={props.onCancel} color="#c53263"/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#005982",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ffeaea",
    backgroundColor: "#fefed7",
    width: "100%",
    padding: 16,
    borderRadius: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
