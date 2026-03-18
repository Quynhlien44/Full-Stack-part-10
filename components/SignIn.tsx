import React from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useRouter } from 'expo-router';
import useSignIn from '../hooks/useSignIn';

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#e1e4e8',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 16,
  },
  input: {
    borderColor: '#aaaaaa',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 4,
    fontSize: 16,
    color: '#24292e',
  },
  inputError: {
    borderColor: '#d73a4a',
  },
  errorText: {
    color: '#d73a4a',
    fontSize: 13,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#0366d6',
    paddingVertical: 14,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const initialValues = { username: '', password: '' };

const SignIn = () => {
  const [signIn] = useSignIn();
  const router = useRouter();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const { username, password } = values;
      try {
        await signIn({ username, password });
        // Redirect về trang Repositories sau khi đăng nhập
        router.replace('/');
      } catch (e) {
        console.log(e);
      }
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TextInput
          style={[
            styles.input,
            formik.touched.username && formik.errors.username
              ? styles.inputError
              : null,
          ]}
          placeholder="Username"
          placeholderTextColor="#aaa"
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
          onBlur={formik.handleBlur('username')}
          autoCapitalize="none"
        />
        {formik.touched.username && formik.errors.username && (
          <Text style={styles.errorText}>{formik.errors.username}</Text>
        )}

        <TextInput
          style={[
            styles.input,
            formik.touched.password && formik.errors.password
              ? styles.inputError
              : null,
          ]}
          placeholder="Password"
          placeholderTextColor="#aaa"
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          secureTextEntry
          autoCapitalize="none"
        />
        {formik.touched.password && formik.errors.password && (
          <Text style={styles.errorText}>{formik.errors.password}</Text>
        )}

        <Pressable style={styles.button} onPress={() => formik.handleSubmit()}>
          <Text style={styles.buttonText}>Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignIn;
