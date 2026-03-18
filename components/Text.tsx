import React from 'react';
import { Text as NativeText, StyleSheet, TextStyle } from 'react-native';
import theme from '../constants/theme';

type Props = {
  style?: TextStyle | TextStyle[];
  children: React.ReactNode;
};

const styles = StyleSheet.create({
  base: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.main ?? undefined, 
  },
});

const Text: React.FC<Props> = ({ style, children }) => {
  return (
    <NativeText style={[styles.base, style]}>
      {children}
    </NativeText>
  );
};

export default Text;
