import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function Form({ ...props }) {
  const { addTask } = props;
  const [name, setName] = useState("");

  const handleChange = (text) => {
    setName(text);
  };
  return (
    <React.Fragment>
      <View style={styles.bottom_left}>
        {/* <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}> */}
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={handleChange}
        />
        {/* </KeyboardAvoidingView> */}
      </View>
      <View style={styles.bottom_right}>
        <TouchableOpacity
          onPress={() => {
            addTask(name);
          }}
        >
          <View style={styles.button_add}>
            <Text style={styles.icon}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  bottom_left: {
    flex: 5,
    // backgroundColor:'white',
    alignItems: "center",
    width: 100,
    justifyContent: "center",
  },
  bottom_right: {
    flex: 1,
    // backgroundColor:'blue',
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    margin: 9,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 18,
    borderColor: "#21a3d0",
    borderWidth: 1,
    padding: 10,
  },
  button_add: {
    borderRadius: 40,
    backgroundColor: "#21a3d0",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    paddingBottom: 4,
  },
});
