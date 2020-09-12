import React, { useState } from 'react';
import { Formik } from "formik";
import { handleTextInput } from "react-native-formik";

import {
  Pressable,
  StyleSheet,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  Text,
  Button,
} from 'react-native';

import { useHistory } from "react-router-native";
import theme from '../../theme';

export const SnippetPreview = (props) => {
  const history = useHistory();

  const handleSnippetPress = () => {
    history.push('/post')
  }

  return (
    <Pressable style={snippet.wrapper} onPress={handleSnippetPress}>
      <ImageBackground style={snippet.image} source={require('./cat.png')} />

      <View style={snippet.description}>
        <Text style={snippet.descriptionTitle}>Добряши помогают котикам</Text>

        <View style={snippet.descriptionInfo}>
          <Text style={snippet.descriptionItem}>Матвей Правосудов</Text>
          <Text style={snippet.descriptionItem}>Закончится через 5 дней</Text>
        </View>
      </View>

      <View style={snippet.footer}>
        <View style={snippet.footerBorder}></View>

        <View style={snippet.progressWrapper}>
          <View style={snippet.progress}>
            <Text style={snippet.footerProgressText}>Собрано 100 ₽ из 1000 ₽</Text>

            <View style={snippet.progressBar}>
              <View style={snippet.progressBarCompleted}></View>
            </View>
          </View>

          <Pressable style={snippet.helpButton} onPress={handleSnippetPress}>
            <Text style={snippet.helpButtonText}>Помочь</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

const snippet = StyleSheet.create({
  wrapper: {
    marginTop: 16,
    borderRadius: 10,
    borderColor: '#EEE',
    borderWidth: 1,
  },
  image: {
    backgroundColor: 'red',
    height: 140,
  },
  description: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: '#FFF'
  },
  descriptionTitle: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 4
  },
  descriptionInfo: {
    flexDirection: "row"
  },
  descriptionItem: {
    color: "#818C99",
    fontSize: 13,
    marginRight: 4,
  },

  footer: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 12,
  },
  footerBorder: {
    height: 1,
    backgroundColor: '#818C99',
    opacity: 0.2,
    marginBottom: 8
  },
  footerProgressText: {
    marginBottom: 8,
    fontSize: 13,
    fontWeight: "500",
    color: '#000'
  },
  progressWrapper: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  progressBar: {
    position: "relative",
    height: 4,
    borderRadius: 2,
    backgroundColor: '#9DC3EF'
  },
  progressBarCompleted: {
    position: "absolute",
    borderRadius: 2,
    top: 0,
    left: 0,
    height: 4,
    width: 240,
    backgroundColor: '#3F8AE0'
  },

  helpButton: {
    borderWidth: 2,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    color: '#3F8AE0',
    borderColor: '#3F8AE0'
  },

  helpButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: '#3F8AE0',
  }
})
