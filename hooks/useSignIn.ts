import { useMutation, useApolloClient } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/queries';
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signIn = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    const { data } = await mutate({
      variables: {
        credentials: { username, password },
      },
    });

    // Lưu access token
    await authStorage.setAccessToken(data.authenticate.accessToken);

    // Reset Apollo Client store
    apolloClient.resetStore();

    return { data };
  };

  return [signIn, result] as const;
};

export default useSignIn;
