import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#000e76" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 10,
    borderRadius: 6,
    backgroundColor: "#041ddc",
  },
  pressedItem: {
    backgroundColor: "#000e76",
  },
  goalText: {
    color: "white",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
});
