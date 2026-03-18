import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'expo-router';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    backgroundColor: '#24292e',
  },
  scrollView: {
    flexDirection: 'row', 
    paddingHorizontal: 15,
  },
  tab: {
    marginRight: 20,
  },
  tabText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const AppBarTab = ({
  label,
  href,
}: {
  label: string;
  href: string;
}) => (
  <Link href={href as any} asChild>
    <Pressable style={styles.tab}>
      <Text style={styles.tabText}>{label}</Text>
    </Pressable>
  </Link>
);

const AppBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollView}
        showsHorizontalScrollIndicator={false}
      >
        <AppBarTab label="Repositories" href="/" />
        <AppBarTab label="Sign in" href="/sign-in" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
