import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 15,
    paddingBottom: 10,
    backgroundColor: '#24292e',
    justifyContent: 'flex-end',
  },
  tab: {

  },
  tabText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const AppBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.tab}>
        <Text style={styles.tabText}>Repositories</Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
