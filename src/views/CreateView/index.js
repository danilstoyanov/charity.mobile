import React from 'react';
import {
  Pressable,
  StyleSheet,
  Image,
  View,
  Text,
} from 'react-native';

import { useHistory } from "react-router-native";

import { Button } from '../../ui/Button';
import theme from '../../theme';

export const CreateView = (props) => {
  const history = useHistory()

  const { setActionType } = props;

  const onTargetPress = () => {
    setActionType('target')

    history.push("/create/form?type=target")
  }

  const onRegularPress = () => {
    setActionType('regular')

    history.push("/create/form?type=regular")
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <Pressable onPress={onTargetPress}>
          <View style={{ ...styles.raisingType, marginBottom: 8 }}>
            <Image style={styles.raisingIcon} source={require('./target-icon.png')}/>

            <View style={styles.raisingContent}>
              <Text style={styles.raisingContentTitle}>Целевой сбор</Text>
              <Text style={styles.raisingContentDescription}>Когда есть определенная цель</Text>
            </View>

            <View style={styles.raisingArrowIconContainer}>
              <Image style={styles.raisingArrowIcon} source={require('./next-icon.png')}/>
            </View>
          </View>
        </Pressable>

        <Pressable onPress={onRegularPress}>
          <View style={styles.raisingType}>
            <Image style={styles.raisingIcon} source={require('./calendar-icon.png')}/>

            <View style={styles.raisingContent}>
              <Text style={styles.raisingContentTitle}>Регулярный сбор</Text>
              <Text style={styles.raisingContentDescription}>Если помощь нужна ежемесячно</Text>
            </View>

            <View style={styles.raisingArrowIconContainer}>
              <Image style={styles.raisingArrowIcon} source={require('./next-icon.png')}/>
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  content: {
    marginTop: "auto",
    marginBottom: "auto",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 24,
    color: "#818C99",
    textAlign: "center",
  },

  raisingType: {
    width: "100%",
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
  },

  raisingIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },

  raisingArrowIconContainer: {
    marginLeft: "auto",
    justifyContent: "center"
  },

  raisingArrowIcon: {
    resizeMode: "contain",
    height: 18,
    width: 10,
  },

  raisingContent: {
    flexDirection: "column",
  },

  raisingContentTitle: {
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 2,
    fontWeight: "600",
    color: '#000',
  },

  raisingContentDescription: {
    fontSize: 13,
    lineHeight: 16,
    color: '#6D7885',
  },

});
