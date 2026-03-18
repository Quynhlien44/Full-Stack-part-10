import React from 'react';
import { Text as NativeText, StyleSheet, TextStyle } from 'react-native';

type Props = {
  style?: TextStyle;
  children: React.ReactNode;
};

const Text: React.FC<Props> = ({ style, children }) => {
  return <NativeText style={[styles.base, style]}>{children}</NativeText>;
};

const styles = StyleSheet.create({
  base: {
    fontSize: 14,
    color: '#24292e',
  },
});

export default Text;
