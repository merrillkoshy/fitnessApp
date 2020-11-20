import React from "react";
import styles from "../assets/styles";

import { Text, View } from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHeart,
  faUser,
  faCircle,
  faHashtag,
  faCalendar
} from "@fortawesome/free-solid-svg-icons";
const ProfileItem = ({
  age,
  info1,
  info2,
  info3,
  info4,
  location,
  matches,
  name
}) => {
  return (
    <View style={styles.containerProfileItem}>
      <View style={styles.matchesProfileItem}>
        <Text style={styles.matchesTextProfileItem}>
          <FontAwesomeIcon icon={faHeart} style={styles.heart} />
          {matches}% Match!
        </Text>
      </View>

      <Text style={styles.name}>{name}</Text>

      <Text style={styles.descriptionProfileItem}>
        {age} - {location}
      </Text>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
          <FontAwesomeIcon icon={faUser} style={styles.iconProfile} />
        </Text>
        <Text style={styles.infoContent}>{info1}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
          <FontAwesomeIcon icon={faCircle} style={styles.iconProfile} />
        </Text>
        <Text style={styles.infoContent}>{info2}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
          <FontAwesomeIcon icon={faHashtag} style={styles.iconProfile} />
        </Text>
        <Text style={styles.infoContent}>{info3}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
          <FontAwesomeIcon icon={faCalendar} style={styles.iconProfile} />
        </Text>
        <Text style={styles.infoContent}>{info4}</Text>
      </View>
    </View>
  );
};

export default ProfileItem;
