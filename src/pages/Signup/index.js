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
  password: yup.string().required("Please insert your password"),
  password_confirmation: yup
    .string()
    .required("Input your password confirmation"),
  name: yup.string().required("Please insert your name"),
  email: yup
    .string()
    .required("Email should not be empty")
    .email("The email you entered is invalid"),
});

export default function Signup() {
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
      const res = await postData("signup", data);
      if (res.status === 201) {
        setLoading(false);
        const token = res.data.auth_token;

        dispatch(userLogin(token));
        setLoading(false);
        // history.push("/v1/todos");
        history.push("/v1/login");
      }
    } catch (error) {
      setLoading(false);
      if (error.response.status === 401) {
        setError(
          "server",
          "server",
          "Passwords that were entered had to be passwords"
        );
      } else if (error.response.status === 422) {
        setError("server", "server", error.response.data.message);
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
        <h1 className="text-center mb-3 font-semibold">Form Signup</h1>
        <TextInput
          placeholder="Masukan nama"
          error={errors?.name?.message}
          register={register}
          name="name"
          className="mt-2"
        />
        <TextInput
          placeholder="Masukan email"
          error={errors?.email?.message}
          register={register}
          name="email"
          className="mt-2"
        />
        <TextInput
          placeholder="Masukan password"
          error={errors?.password?.message}
          register={register}
          name="password"
          type="password"
          className="mt-2"
        />
        <TextInput
          placeholder="Masukan konfirmasi password"
          error={errors?.password_confirmation?.message}
          register={register}
          name="password_confirmation"
          type="password"
          className="mt-2"
        />

        {loading ? (
          <p>lagi loading...</p>
        ) : (
          <Button
            type="submit"
            bgColor="bg-greenSecondary"
            textColor="text-white"
            label="Daftar"
            className="mt-2"
          />
        )}

        <div className="flex justify-center mt-3">
          <p className="text-sm">
            Sudah punya akun?&nbsp;
            <Link to="/v1" className="text-blue">
              <u>Login</u>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
