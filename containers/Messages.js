import React from "react";
import styles from "../assets/styles";

import {
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  FlatList
} from "react-native";
import Message from "../components/Message";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import Demo from "../assets/data/demo.js";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Messages = () => {
  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <View style={styles.containerMessages}>
        <FlatList
          ListHeaderComponent={
            <View style={styles.top}>
              <Text style={styles.title}>Messages</Text>
              <TouchableOpacity>
                <Text style={styles.icon}>
                  <FontAwesomeIcon icon={faPlus} style={styles.icon} />
                </Text>
              </TouchableOpacity>
            </View>
          }
          data={Demo}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Message
                image={item.image}
                name={item.name}
                lastMessage={item.message}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
};

export default Messages;
