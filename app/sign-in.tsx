import React from 'react';
import { View, StyleSheet } from 'react-native';
import SignIn from '@/components/SignIn';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e4e8',
    padding: 16,
  },
});

export default function SignInScreen() {
  return (
    <View style={styles.container}>
      <SignIn />
    </View>
  );
}
