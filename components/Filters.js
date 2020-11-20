import React from "react";
import styles from "../assets/styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Text, TouchableOpacity } from "react-native";

import { faFilter } from "@fortawesome/free-solid-svg-icons";

const Filters = () => {
  return (
    <TouchableOpacity style={styles.filters}>
      <Text style={styles.filtersText}>
        <FontAwesomeIcon icon={faFilter} style={styles.filters} /> Filters
      </Text>
    </TouchableOpacity>
  );
};

export default Filters;
