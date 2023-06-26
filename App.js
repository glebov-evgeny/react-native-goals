import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [goalText, setGoalText] = useState("");
  const [goals, setGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setGoalText(enteredText);
  }

  function addGoalHandler() {
    setGoals((curentGoals) => [
      ...curentGoals,
      { text: goalText, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Начните печатать.."
          onChangeText={goalInputHandler}
        />
        <Button
          style={styles.button}
          title="Добавить"
          onPress={addGoalHandler}
        />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          alwaysBounceVertical={false}
          keyExtractor={(item, index)=>{
            return(item.id)
          }}
          renderItem={(itemData) => {
            itemData.index;
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingVertical: 75,
    paddingHorizontal: 25,
  },
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
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    marginBottom: 8,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
