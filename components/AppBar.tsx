import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link, useRouter } from 'expo-router';
import { useQuery } from '@apollo/client';
import { useApolloClient } from '@apollo/client';
import { ME } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';

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
  const { data } = useQuery(ME);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const router = useRouter();

  const isSignedIn = data?.me !== null && data?.me !== undefined;

  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    router.replace('/sign-in');
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollView}
        showsHorizontalScrollIndicator={false}
      >
        <AppBarTab label="Repositories" href="/" />
        {isSignedIn ? (
          <Pressable style={styles.tab} onPress={handleSignOut}>
            <Text style={styles.tabText}>Sign out</Text>
          </Pressable>
        ) : (
          <AppBarTab label="Sign in" href="/sign-in" />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
