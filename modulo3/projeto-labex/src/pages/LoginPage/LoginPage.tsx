import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";

import api from "../../api/apiUrl";
import { IAuthDTO, IFormValues } from "../../interfaces/InfoDTO";
import { LoginPageContainer } from "./LoginPage.styled";

const LoginPage = function (): JSX.Element {
  const handleSubmit = async (values: IFormValues) => {
    try {
      const responseAuth = await api.post("login", values);
      if (responseAuth.data) {
        const authData: IAuthDTO = await responseAuth.data;
        localStorage.setItem("labex-token", authData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });
  return (
    <LoginPageContainer>
      <h1>Login do Administrador</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validations}
      >
        <Form className="Login">
          <div className="Login-Group">
            <Field name="email" className="Login-Field" />
            <ErrorMessage
              component="span"
              name="email"
              className="Login-Error"
            />
          </div>
          <div className="Login-Group">
            <Field name="password" className="Login-Field" />
            <ErrorMessage
              component="span"
              name="password"
              className="Login-Error"
            />
          </div>
          <button className="Login-Btn" type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </LoginPageContainer>
  );
};

export default LoginPage;
