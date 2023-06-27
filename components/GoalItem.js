import { StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginBottom: 8,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: "#041ddc",
  },
  goalText: {
    color: "white",
  },
});
