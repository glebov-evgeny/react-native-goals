import { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

function GoalInput(props) {
  const [goalText, setGoalText] = useState("");
  
  function goalInputHandler(enteredText) {
    setGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(goalText);
    setGoalText('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Начните печатать.."
        onChangeText={goalInputHandler}
        value={goalText}
      />
      <Button
        title="Добавить"
        onPress={addGoalHandler}
      />
    </View>
  )
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 10,
    padding: 8,
    borderRadius: 4,
    backgroundColor: "#fff",
  },
});