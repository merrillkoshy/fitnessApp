import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from "./assets/styles";
import HomeScreen from "./containers/Home";
import MatchesScreen from "./containers/Matches";
import MessagesScreen from "./containers/Messages";
import ProfileScreen from "./containers/Profile";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faPlus,
  faGlobe,
  faHeadSideCough,
  faHeart,
  faCoffee,
  faUser
} from "@fortawesome/free-solid-svg-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      // tabBarOptions={{
      //   activeTintColor: "#7444C0",
      //   inactiveTintColor: "#363636",
      //   labelStyle: {
      //     fontSize: 14,
      //     textTransform: "uppercase",
      //     paddingTop: 10
      //   },
      //   style: {
      //     backgroundColor: "#FFF",
      //     borderTopWidth: 0,
      //     paddingVertical: 30,
      //     height: 60,
      //     marginBottom: 0,
      //     shadowOpacity: 0.05,
      //     shadowRadius: 10,
      //     shadowColor: "#000",
      //     shadowOffset: { height: 0, width: 0 }
      //   }
      // }}
      >
        <Tab.Screen
          name="Explore"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              const iconFocused = focused ? "#7444C0" : "#363636";
              return (
                <Text style={[styles.iconMenu, { color: iconFocused }]}>
                  <FontAwesomeIcon icon={faGlobe} style={styles.iconMenu} />
                </Text>
              );
            }
          }}
        />
        <Tab.Screen
          name="Matches"
          component={MatchesScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              const iconFocused = focused ? "#7444C0" : "#363636";
              return (
                <Text style={[styles.iconMenu, { color: iconFocused }]}>
                  <FontAwesomeIcon icon={faHeart} style={styles.heart} />
                </Text>
              );
            }
          }}
        />
        <Tab.Screen
          name="Chat"
          component={MessagesScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              const iconFocused = focused ? "#7444C0" : "#363636";
              return (
                <Text style={[styles.iconMenu, { color: iconFocused }]}>
                  <FontAwesomeIcon icon={faCoffee} style={styles.iconMenu} />
                </Text>
              );
            }
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              const iconFocused = focused ? "#7444C0" : "#363636";
              return (
                <Text style={[styles.iconMenu, { color: iconFocused }]}>
                  <FontAwesomeIcon icon={faUser} style={styles.iconMenu} />
                </Text>
              );
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
