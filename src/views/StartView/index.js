import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { useHistory } from "react-router-dom";


import { Button } from '../../ui/Button';
import theme from '../../theme';

export const StartView = (props) => {
  const history = useHistory()

  const textContent = "У Вас пока нет сборов.\nНачните доброе дело."

  const onCreatePress = () => {
    history.push("/create")
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <Text style={styles.text}>{textContent}</Text>

        <Button title="Создать сбор" onPress={onCreatePress}/>
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
  }
});
