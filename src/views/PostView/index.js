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
  Dimensions,
} from 'react-native';

import { useHistory } from "react-router-native";
import theme from '../../theme';

const windowWidth = Dimensions.get('window').width;

export const PostView = (props) => {
  const history = useHistory();

  const handleBackButtonPress = () => {
    history.goBack();
  }

  return (
    <ScrollView style={snippet.wrapper}>
      <View style={snippet.header}>
        <Pressable style={snippet.backButton} onPress={handleBackButtonPress}>
          <Image style={snippet.backButtonImage} source={require('./icon-back.png')}/>
        </Pressable>
        <ImageBackground style={snippet.image} source={require('./cat.png')} />
      </View>

      <View style={snippet.section}>
        <Text style={snippet.mainHeading}>Добряши помогают котикам</Text>
        <Text style={snippet.secondaryHeading}>Автор: Матвей Правосудов</Text>
        <Text style={snippet.secondaryParagraph}>Сбор закончится через 5 дней</Text>
      </View>

      <View style={snippet.section}>
        <Text style={snippet.progressBarTitle}>Нужно собрать до 15 сентября</Text>

        <View style={snippet.progressBar}>
          <Text style={snippet.progressBarRequiredSum}>10 000 ₽</Text>
          <Text style={snippet.progressBarCollectedSum}>8 750 ₽</Text>

          <View style={snippet.progressBarProgress} />
        </View>
      </View>

      <View style={snippet.section}>
        <Text style={{...snippet.paragraph, marginBottom: 24 }}>
          Привет, привет добряш!
        </Text>

        <Text style={{...snippet.paragraph, marginBottom: 24 }}>
          Я создал это событие, чтобы показать какие у меня прекрасные добряши и буду счастлив, если получится вдохновить кого-нибудь хотя бы на маленький перевод в пользу фонда Юна.
        </Text>

        <Text style={{...snippet.paragraph, marginBottom: 24 }}>
          ◾ Если получится собрать 1 000 рублей, то это будет 5 обработанных животных от блох и клещей.
        </Text>

        <Text style={{...snippet.paragraph, marginBottom: 24 }}>
          ◾ Собранные 5 000 рублей превратятся в 25 кг корма для подопечных фонда.
        </Text>

        <Text style={{...snippet.paragraph, marginBottom: 24 }}>
          ◾ А 10 000 рублей позволят провести курс занятий с кинологом по социализации сложной собаки. Чтобы она легче нашла свой дом.
        </Text>

        <Text style={snippet.paragraph}>
          В благотворительности не бывает маленьких сумм, поэтому если вы хотите помочь, то переведите любую сумму, будь-то 10 рублей или 1000 💚
        </Text>
      </View>

      <View style={snippet.commentWrapper}>
        <ImageBackground style={snippet.commentBackground} source={require('./comments.png')}></ImageBackground>
      </View>

      <View style={snippet.helpBlock}>
        <View style={snippet.progress}>
          <Text style={snippet.helpBlockTitle}>Собрано 100 ₽ из 1000 ₽</Text>

          <View style={snippet.progressBarHelp}>
            <View style={snippet.progressBarCompleted}></View>
          </View>
        </View>

        <Pressable style={snippet.helpButton}>
          <Text style={snippet.helpButtonText}>Помочь</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const snippet = StyleSheet.create({
  wrapper: {
    marginTop: 16,
  },
  header: {
    position: "relative",
  },
  backButton: {
    position: "absolute",
    height: 100,
    top: 20,
    left: 8,
    width: 40,
    zIndex: 5,
    justifyContent: "center",
  },
  backButtonImage: {
    width: 12,
    height: 24,
    marginLeft: 8,
    resizeMode: "contain"
  },
  image: {
    height: 140,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  section: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#D7D8D9'
  },
  mainHeading: {
    fontSize: 24,
    fontWeight: "700",
    color: '#000',
    marginBottom: 4,
  },
  secondaryHeading: {
    fontSize: 16,
    fontWeight: "500",
    color: '#6D7885',
    marginBottom: 6,
  },
  secondaryParagraph: {
    fontSize: 13,
    color: '#6D7885'
  },
  progressBarTitle: {
    marginBottom: 4,
  },
  progressBar: {
    position: "relative",
    height: 24,
    borderRadius: 12,
    backgroundColor: '#EBEDF0'
  },
  progressBarRequiredSum: {
    position: "absolute",
    right: 8,
    top: 4,
    fontSize: 14,
    fontWeight: "600",
    color: '#6D7885',
  },
  progressBarCollectedSum: {
    position: "absolute",
    top: 4,
    left: (windowWidth / 100 * 65) - 64,
    zIndex: 5,
    fontSize: 14,
    fontWeight: "600",
    color: '#FFF',
  },
  progressBarProgress: {
    width: windowWidth / 100 * 65, 
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#4BB34B',
  },
  paragraph: {
    lineHeight: 20,
    fontSize: 15,
  },
  commentWrapper: {
    height: 150,
  },
  commentBackground: {
    height: 150,
  },


  helpBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  helpBlockTitle: {
    marginBottom: 6,
  },
  progressBarHelp: {
    position: "relative",
    height: 4,
    borderRadius: 2,
    backgroundColor: '#EBEDF0'
  },
  progressBarCompleted: {
    position: "absolute",
    borderRadius: 2,
    top: 0,
    left: 0,
    height: 4,
    width: 240,
    backgroundColor: '#4BB34B'
  },



  helpButton: {
    borderWidth: 2,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    color: '#FFF',
    backgroundColor: '#4BB34B',
    borderColor: '#4BB34B'
  },
  helpButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: '#EBEDF0',
  }
})
