import React from "react";
import { ActivityIndicator, Dimensions, StyleSheet, View } from "react-native";
import ButtonComponent from "../../components/button/ButtonComponent";
// LoginScreen.js
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { signInAction } from "../../stores/actions/auth-actions";
import { EAuthActions } from "../../stores/actions/auth-actions/constants";
import TextInput from "../../components/text-input/TextInput";
import { TRootState } from "../../stores/reducers";

interface IProps {
  navigation: any; // Replace with your own navigation prop type
}

const validationSchema = yup.object().shape({
  email: yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
  password: yup
    .string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .required("Mật khẩu là bắt buộc"),
});

const LoginScreen = ({ navigation }: IProps) => {
  const dispatch = useDispatch();

  const isTryingLogin = useSelector(
    (state: TRootState) => state.loading[EAuthActions.SIGN_IN]
  );

  const handleSignInSuccess = (reponse: any) => {
    navigation.navigate("HomePage");
  };

  const handleLogin = (values: any) => {
    dispatch(signInAction(values, handleSignInSuccess));
  };

  if (isTryingLogin) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleLogin}
      validationSchema={validationSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Nhập email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
          />
          <TextInput
            style={styles.input}
            placeholder="Nhập mật khẩu"
            secureTextEntry
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
          />
          <ButtonComponent
            title="Đăng Nhập"
            onPress={handleSubmit}
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
          />
        </View>
      )}
    </Formik>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 30,
  },
  loading: {
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  button: {
    backgroundColor: "#000",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
  input: {
    width: "100%",
    borderColor: "#000",
    borderWidth: 2,
    paddingHorizontal: 18,
    paddingVertical: 12,
    fontSize: 18,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default LoginScreen;
