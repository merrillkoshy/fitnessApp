import React from "react";
import styles from "../assets/styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Text, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import { faMarker, faMapPin } from "@fortawesome/free-solid-svg-icons";

const City = () => {
  return (
    <TouchableOpacity style={styles.city}>
      <Text style={styles.cityText}>
        <FontAwesomeIcon icon={faMapPin} style={styles.cityText} />
        New York
      </Text>
    </TouchableOpacity>
  );
};

export default City;
