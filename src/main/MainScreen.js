import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../components/home";
import SettingsScreen from "../components/setting";

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              style={[focused ? styles.active : styles.unactive]}
              name="md-home"
              size={20}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <React.Fragment>
              {focused && (
                <Text style={[focused ? styles.active : styles.unactive]}>
                  Trang trủ
                </Text>
              )}
            </React.Fragment>
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Settings"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              style={[focused ? styles.active : styles.unactive]}
              name="md-settings"
              size={20}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <React.Fragment>
              {focused && (
                <Text style={[focused ? styles.active : styles.unactive]}>
                  Cài đặt
                </Text>
              )}
            </React.Fragment>
          ),
        }}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  active: {
    color: "#00ced1",
  },
  unactive: {
    color: "gray",
  },
});
