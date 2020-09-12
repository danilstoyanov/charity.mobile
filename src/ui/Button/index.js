import React from 'react';
import {
  StyleSheet,
  View,
  Pressable,
  Text,
} from 'react-native';

import theme from '../../theme';

// Component	ElementType<any>	button	
// after	ReactNode		
// align	AlignType		
// before	ReactNode		
// getRootRef	Ref<HTMLElement>		
// href	string		
// mode	"primary" | "secondary" | "tertiary" | "outline" | "commerce" | "destructive" | "overlay_primary" | "overlay_secondary" | "overlay_outline"	primary	
// size	"m" | "l" | "xl"	m	
// stopPropagation	boolean	true	
// stretched	boolean	false	
// target	string		

export const Button = (props) => {
  const {
    title = "кнопка",
    type,
    onPress,
    style,
    after,
    before,
    getRootRef,
    href,
    size,
  } = props

  // const buttonStyle = {
  //   ...styles.general,
  //   ...(size ? styles.size[size] : styles.size.medium),
  //   ...(type ? styles.type[type] : styles.type.base)
  // }

  const buttonStyleSheet = StyleSheet.create({
    general: buttonStyleTheme.general,
    size: size ? buttonStyleTheme.size[size] : buttonStyleTheme.size.medium,
    type: type ? buttonStyleTheme.type[type] : buttonStyleTheme.type.base,
  })

  const buttonStyle = {
    ...buttonStyleSheet.general,
    ...buttonStyleSheet.size,
    ...buttonStyleSheet.type,
  }

  console.log(title, 'title')

  return (
    <Pressable style={{...buttonStyle, ...(style ? style : {})}} onPress={onPress}>
      <Text style={commonStyles.buttonText}>
        {title}
      </Text>
    </Pressable>
  );
};

const buttonStyleTheme = {
  general: {
    borderRadius: 8,
    alignContent: "center",
    justifyContent: "center",
  },

  size: {
    medium: {
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 8,
      paddingBottom: 8,
      height: 36,
    },
  },

  type: {
    base: {
      backgroundColor: theme.color.baseColor
    },
  },
};

const commonStyles = StyleSheet.create({
  test: {
    flexGrow: 0,
  },

  buttonText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#fff"
  },
});
