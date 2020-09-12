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

import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import { Select } from '../../ui/Select';
import { Radio } from '../../ui/Radio';
import theme from '../../theme';

export const FormAdditionalView = (props) => {
  const history = useHistory();

  const radio_props = [
    {label: 'Когда соберем сумму', value: 0 },
    {label: 'В определенную дату', value: 1 }
  ];

  const handleFormSubmit = () => {
    history.push('/snippet')
  }

  return (
    <ScrollView style={generalStyle.wrapper}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <View style={createForm.wrapper}>

        <Formik onSubmit={values => console.log(values)}>
          {props => {
            console.log(props, 'props')

            return (
              <>
                <Input
                  name="author"
                  label="Автор"
                  placeholder="Автор"
                  onChangeText={handleTextInput}
                />

                <Radio
                  label="Сбор завершится"
                  radio_props={radio_props}
                  initial={0}
                  wrapperStyle={{ marginTop: 24 }}
                  onPress={(value) => {}}
                />

                <Select
                  label="Дата окончания"
                  placeholder="Выберите дату"
                  wrapperStyle={{ marginTop: 24 }}
                  onValueChange={(value) => console.log(value)}
                  items={[
                    { label: '12 сентября', value: '13.30' },
                  ]}
                />

                <Button onPress={handleFormSubmit} style={createForm.fieldSubmitButton} title="Далее" />
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

const generalStyle = StyleSheet.create({
  wrapper: {
    marginTop: 16,
  },
});
