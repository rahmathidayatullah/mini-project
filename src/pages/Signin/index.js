import * as React from "react";
import TextInput from "components/TextInput";
import { useForm } from "react-hook-form";
import Button from "components/Button";
import { useHistory, Link } from "react-router-dom";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { postData } from "utils/fetchData";
import { userLogin } from "features/Auth/actions";

const schema = yup.object().shape({
  password: yup.string().required("Enter your password !"),
  email: yup
    .string()
    .required("Email cannot be empty !")
    .email("The email you entered is invalid !"),
});

export default function Signin() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, errors, setError } = useForm({
    mode: "onBlur",
    validationSchema: schema,
  });
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await postData("auth/login", data);
      if (res.status === 200) {
        setLoading(false);
        const token = res.data.auth_token;

        dispatch(userLogin(token));
        setLoading(false);
        history.push("/todos");
      }
    } catch (error) {
      setLoading(false);
      if (error.response.status === 401) {
        setError(
          "server",
          "server",
          "The account you entered has not been registered, please check your email and password"
        );
      }
    }
  };

  return (
    <div className="flex items-center h-screen">
      {errors?.server && (
        <p className="fixed top-0 left-0 right-0 bg-red p-3 text-center text-white font-meduim">
          {errors.server.message}
        </p>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-96 max-w-sm border p-4 rounded-lg m-auto"
      >
        <h1 className="text-center mb-3 font-semibold">Form Login</h1>
        <TextInput
          error={errors?.email?.message}
          register={register}
          name="email"
          className="mt-2"
          placeholder="Masukan email"
        />
        <TextInput
          error={errors?.password?.message}
          register={register}
          name="password"
          type="password"
          className="mt-2"
          placeholder="Masukan password"
        />
        <Button
          type="submit"
          bgColor="bg-greenSecondary"
          textColor="text-white"
          label={loading ? "Loading..." : "Signin"}
          className="mt-2"
        />
        <div className="flex justify-center mt-3">
          <p className="text-sm">
            Belum punya akun?&nbsp;
            <Link to="/signup" className="text-blue">
              <u>Daftar</u>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
