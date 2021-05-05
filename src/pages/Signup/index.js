import React from "react";
import TextInput from "components/TextInput";
import { useForm } from "react-hook-form";
import Button from "components/Button";
import { useHistory, Link } from "react-router-dom";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { postData } from "api/auth";
import { userLogin } from "features/Auth/actions";

const schema = yup.object().shape({
  password: yup.string().required("masukan kata sandi anda."),
  password_confirmation: yup
    .string()
    .required("masukan konfirmasi kata sandi anda."),
  name: yup.string().required("masukan nama anda."),
  email: yup
    .string()
    .required("email tidak boleh kosong.")
    .email("email yang anda masukan tidak valid."),
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
      console.log(res);
      if (res.status === 201) {
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
          "Kata sandi yang dimasukan harus password"
        );
      } else if (error.response.status === 422) {
        setError("server", "server", error.response.data.message);
      }
    }
  };

  return (
    <div>
      {errors?.server && <p>{errors.server.message}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          placeholder="masukan nama"
          error={errors?.name?.message}
          register={register}
          name="name"
        />
        <TextInput
          placeholder="masukan email"
          error={errors?.email?.message}
          register={register}
          name="email"
        />
        <TextInput
          placeholder="masukan password"
          error={errors?.password?.message}
          register={register}
          name="password"
          type="password"
        />
        <TextInput
          placeholder="masukan konfirmasi password"
          error={errors?.password_confirmation?.message}
          register={register}
          name="password_confirmation"
          type="password"
        />

        {loading ? (
          <p>lagi loading...</p>
        ) : (
          <Button
            type="submit"
            bgColor="bg-greenSecondary"
            textColor="text-white"
            label="Daftar"
          />
        )}

        <div className="flex justify-center mt-3">
          <p className="text-sm">
            Sudah punya akun?
            <Link to="/">Masuk</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
