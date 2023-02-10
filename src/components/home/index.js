import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ListTask from "./ListTask";
import Form from "./Form";

export default function HomeScreen() {
  const [task, setTask] = useState([]);
  const handleAddTask = (name) => {
    setTask([...task, name]);
  };
  const handleRemove = (index) => {
    var arrTmp = [...task];
    arrTmp.splice(index, 1);
    setTask(arrTmp);
  };
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <ListTask task={task} remove={handleRemove} />
      </View>
      <View style={styles.bottom}>
        <Form addTask={handleAddTask} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 9,
    // backgroundColor:'black'
  },
  bottom: {
    height: 55,
    flexDirection: "row",
  },
});
