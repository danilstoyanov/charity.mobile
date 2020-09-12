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
} from 'react-native';

import { useHistory } from "react-router-native";
import ImagePicker from 'react-native-image-picker';

import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import { Select } from '../../ui/Select';
import theme from '../../theme';
import { act } from 'react-test-renderer';

// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
  title: 'Загрузите обложку',
  cancelButtonTitle: 'Отмена',
  takePhotoButtonTitle: 'Сделать фото',
  chooseFromLibraryButtonTitle: 'Выбрать из галереи',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export const FormView = (props) => {
  const history = useHistory();
  const [coverImage, setCoverImage] = useState('');

  const { actionType } = props;

  const handleImageUploadPress = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // const source = 'data:image/jpeg;base64,' + response.data;
        const source = response.uri;
        setCoverImage(source);
      }
    });
  }

  const handleImageReset = () => {
    setCoverImage('')
  }

  const handleFormSubmit = () => {
    if(actionType === 'regular') {
      history.push('/create/additional')
    } else {
      history.push('/snippet')
    }
  }

  return (
    <ScrollView style={generalStyle.wrapper}>
      <View style={generalStyle.coverWrapper}>
        {coverImage === '' ? (
          <Pressable onPress={handleImageUploadPress}>
            <View style={coverStyle.inputWrapper}>
              <View style={coverStyle.inputDescription}>
                <Image style={coverStyle.inputIcon} source={require('./image-icon.png')} />

                <Text style={coverStyle.inputText}>
                  Загрузить обложку
                </Text>
              </View>
            </View>
          </Pressable>
        ) : (
          <View style={coverStyle.cover}>
            <Pressable style={coverStyle.coverResetButton} onPress={handleImageReset}>
              <Image source={require('./icon-close.png')} />
            </Pressable>

            <ImageBackground
              imageStyle={{ borderRadius: 8 }}
              source={coverImage ? { uri: coverImage } : null} style={coverStyle.coverBackground}
            />
          </View>
        )}
      </View>

      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <View style={createForm.wrapper}>

        <Formik onSubmit={values => console.log(values)}>
          {props => {
            console.log(props, 'props')

            return (
              <>
                <Input
                  name="actionTitle"
                  label="Название сбора"
                  placeholder="Название сбора"
                  onChangeText={handleTextInput}
                />

                <Input
                  name="requiredSum"
                  wrapperStyle={{ marginTop: 24 }}
                  label="Сумма ₽"
                  placeholder="Сумма ₽"
                />

                <Input
                  wrapperStyle={{ marginTop: 24 }}
                  label="Цель"
                  placeholder="Например, лечение человека"
                />

                <Input
                  multiline
                  inputStyle={{ height: 60 }}
                  wrapperStyle={{ marginTop: 24 }}
                  label="Описание"
                  placeholder="На что пойдут деньги и как они кому-то помогут"
                />

                <Select
                  label="Куда получать деньги"
                  placeholder="Выберите счет"
                  wrapperStyle={{ marginTop: 24 }}
                  onValueChange={(value) => console.log(value)}
                  items={[
                    { label: 'Счет Персика', value: 'Счет Персика' },
                    { label: 'Счет Голубя Михаила', value: 'Счет Голубя Михаила' },
                  ]}
                />

                <Button onPress={() => {
                  // props.handleSubmit()
                  setTimeout(handleFormSubmit, 0)
                }} style={createForm.fieldSubmitButton} title="Далее" />
              </>
            );
          }}
        </Formik>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const createForm = StyleSheet.create({
  fieldSubmitButton: {
    height: 44,
    marginTop: 32,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  }
})

const coverStyle = StyleSheet.create({
  cover: {
    marginTop: 8,
    height: 140,
    borderRadius: 6,
    flex: 1,
    backgroundColor: "red"
  },
  coverBackground: {
    height: 140,
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  coverResetButton: {
    zIndex: 10,
    padding: 0,
    position: "absolute",
    top: 12,
    right: 12,
    alignSelf: "flex-start",
    borderRadius: 12,
    height: 24,
    width: 24,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    backgroundColor: "#99A2AD",
    justifyContent: "center",
    alignItems: "center",
  },
  inputWrapper: {
    marginTop: 8,
    height: 140,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: theme.color.baseColor,
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
  },
  inputDescription: {
    flexDirection: "row",
  },
  inputIcon: {
    marginRight: 8,
    width: 24,
    height: 24,
    resizeMode: "contain"
  },
  inputText: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "500",
    color: theme.color.baseColor
  },
})

const generalStyle = StyleSheet.create({
  coverWrapper: {
    height: 140,
    marginBottom: 32,
  },
});
