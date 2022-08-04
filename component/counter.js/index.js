import { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const Counter = () => {
  const [Counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.cotainerTitle}>
        <Text style={styles.title}>Counter</Text>
      </View>
      <View style={styles.countContainer}>
        <Text>Count: {Counter}</Text>
      </View>

      <TouchableOpacity style={styles.countContainer}>
        <Button
          title="Incremented"
          color="blue"
          onPress={() => setCounter(Counter + 1)}
        />
        <Button
          title="Decremented"
          color="red"
          onPress={() => setCounter(Counter - 1)}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 400,
    marginVertical: 270,
    backgroundColor: "#ddd",
  },

  button: {
    alignItems: "center",
    backgroundColor: "#000",
    padding: 10,
  },

  countContainer: {
    alignItems: "center",
    padding: 10,
  },

  cotainerTitle: {
    alignItems: "center",
    padding: 26,
    backgroundColor: "#000000",
  },

  title: {
    fontWeight: "500",
    fontSize: 26,
    color: "#ffffff",
  },
});

export default Counter;
