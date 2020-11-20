import React from "react";
import styles from "../assets/styles";

import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList
} from "react-native";
import CardItem from "../components/CardItem";
import Icon from "../components/Icon";
import Demo from "../assets/data/demo.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const Matches = () => {
  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <View style={styles.containerMatches}>
        <FlatList
          ListHeaderComponent={
            <View style={styles.top}>
              <Text style={styles.title}>Matches</Text>
              <TouchableOpacity>
                <Text style={styles.icon}>
                  <FontAwesomeIcon icon={faPlus} style={styles.icon} />
                </Text>
              </TouchableOpacity>
            </View>
          }
          numColumns={2}
          data={Demo}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <CardItem
                image={item.image}
                name={item.name}
                status={item.status}
                variant
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
};

export default Matches;
