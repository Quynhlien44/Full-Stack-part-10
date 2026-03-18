import { useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/queries';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);

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
    return { data };
  };

  return [signIn, result] as const;
};

export default useSignIn;
