import React from 'react';
import { useHistory, useLocation } from "react-router-native";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable
} from 'react-native';

import theme from '../../theme';

export const PanelHeader = (props) => {
  const location = useLocation()
  const history = useHistory()
  
  const {
    title = 'Пожертвования',
    actionType,
  } = props

  const isHomeScreen = location.pathname === '/'
  const isPostPage = location.pathname === "/post"

  const handleBackClick = () => {
    history.goBack();
  }

  if(isPostPage) {
    return null;
  }


  const PanelHeaderTitles = {
    '/': 'Пожертвования',
    '/create': 'Тип сбора',
    '/create/form': actionType === 'regular' ? 'Регулярный сбор' : 'Целевой сбор',
    '/create/additional': 'Дополнительно',
    '/snippet': 'Сниппет',
    '/post': '',
  }

  return (
    <View style={styles.panel}>
      {!isHomeScreen && (
        <Pressable
          onPress={handleBackClick}
          style={styles.backButton}
        >
          <Image source={require('./backIcon.png')}/>
        </Pressable>
      )}

      <Text style={styles.title}>{PanelHeaderTitles[location.pathname] ? PanelHeaderTitles[location.pathname] : 'Заголовок'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    position: "relative",
    height: 52,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderBottomColor: theme.color.lightSeparator,
    borderBottomWidth: 1,
  },

  backButton: {
    position: "absolute",
    justifyContent: "center",
    top: 0,
    left: 0,
    width: 48,
    height: 48,
  },

  title: {
    fontWeight: "700",
    fontSize: 21,
    alignSelf: "center",
    marginLeft: "auto",
    marginRight: "auto",
  }
});
