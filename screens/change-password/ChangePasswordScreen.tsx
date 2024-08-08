import React from "react";
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ButtonComponent from "../../components/button/ButtonComponent";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { changePasswordAction } from "../../stores/actions/auth-actions";
import { EAuthActions } from "../../stores/actions/auth-actions/constants";
import TextInput from "../../components/text-input/TextInput";
import { TRootState } from "../../stores/reducers";

interface IProps {
  navigation: any; // Replace with your own navigation prop type
}

const validationSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .required("Mật khẩu là bắt buộc"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("repeatPassword là bắt buộc"),
});

const ChangePasswordScreen = ({ navigation }: IProps) => {
  const dispatch = useDispatch();

  const isTryingLogin = useSelector(
    (state: TRootState) => state.loading[EAuthActions.SIGN_IN]
  );

  const handleChangePasswordSuccess = () => {
    navigation.navigate("Profile");
  };

  const handleLogin = (values: any) => {
    dispatch(
      changePasswordAction(values.password, handleChangePasswordSuccess)
    );
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
      initialValues={{ repeatPassword: "", password: "" }}
      onSubmit={handleLogin}
      validationSchema={validationSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        isValid,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <Text style={styles.note}>
            Lưu ý: Mật khẩu và mật khẩu nhập lại phải giống nhau!!
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập mật khẩu"
            secureTextEntry
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
          />
          <TextInput
            style={styles.input}
            placeholder="Nhập lại mật khẩu"
            secureTextEntry
            onChangeText={handleChange("repeatPassword")}
            onBlur={handleBlur("repeatPassword")}
            value={values.repeatPassword}
          />

          <ButtonComponent
            title="Đổi mật khẩu"
            disabled={
              !isValid ||
              values.repeatPassword.length == 0 ||
              values.repeatPassword.length == 0
            }
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
    marginTop: 10,
  },
  note: {
    marginBottom: 18,
    fontSize: 16,
    fontWeight: "bold",
  },
  loading: {
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  button: {
    backgroundColor: "#4169e1",
    borderColor: "#4169e1",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
  input: {
    width: "100%",
    borderColor: "#4169e1",
    borderWidth: 2,
    paddingHorizontal: 18,
    paddingVertical: 12,
    fontSize: 18,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default ChangePasswordScreen;
