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
  password: yup.string().required("masukan kata sandi anda."),
  email: yup
    .string()
    .required("email tidak boleh kosong.")
    .email("email yang anda masukan tidak valid."),
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
          "Akun yang anda masukan belum terdaftar, silahkan periksa email dan password"
        );
      }
    }
  };

  return (
    <div className="flex items-center h-screen">
      {errors?.server && <p>{errors.server.message}</p>}
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
        {loading ? (
          <p>lagi loading...</p>
        ) : (
          <Button
            type="submit"
            bgColor="bg-greenSecondary"
            textColor="text-white"
            label="Masuk"
            className="mt-2"
          />
        )}
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
