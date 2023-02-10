import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styled from "styled-components";

const Page = styled(View)`
  margin: 10px 20px 10px 20px;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
`;

export default function ListTask({ ...props }) {
  const { task, remove } = props;
  return (
    <ScrollView>
      {task.map((item, index) => {
        return (
          <Page style={styles.box} key={index}>
            <View style={styles.task}>
              <View style={[styles.badge, styles.badgeOder]}>
                <Text style={[styles.boxPadding, styles.colorBadge]}>
                  {index + 1}
                </Text>
              </View>
              <View style={styles.badge}>
                <Text
                  style={[styles.boxPadding, styles.colorBadge]}
                  numberOfLines={1}
                >
                  {item.length > 40 ? item.substring(0, 40) + "..." : item}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                remove(index);
              }}
            >
              <View style={styles.taskClose}>
                <Text style={[styles.boxPadding, styles.colorBadge]}>X</Text>
              </View>
            </TouchableOpacity>
          </Page>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  task: {
    flexDirection: "row",
  },
  badge: {
    borderRadius: 5,
    backgroundColor: "#127c12",
  },
  taskClose: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    height: 32,
    width: 32,
    backgroundColor: "#ef2a2a",
  },
  boxPadding: {
    padding: 8,
  },
  colorBadge: {
    color: "white",
    fontWeight: "bold",
  },
  badgeOder: {
    marginRight: 8,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#bb8e55",
  },
});
