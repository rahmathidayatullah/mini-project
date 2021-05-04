import * as React from "react";
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

  const onSubmit = async ({ email, password }) => {
    try {
      setLoading(true);
      let { data } = await postData(email, password);
      console.log(data);
      setLoading(false);
      const token = data.auth_token;
      dispatch(userLogin(token));
      history.push("/todos");
    } catch (error) {
      setLoading(false);
      setError(
        "server",
        "server",
        "Akun yang anda masukan belum terdaftar, silahkan periksa email dan password"
      );
    }

    let { data } = await postData(email, password);
    if (data.status == 401) {
      console.log("password atau username salah");
    } else {
      console.log("data benar");
    }
  };

  return (
    <div>
      {errors?.server && <p>{errors.server.message}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          error={errors?.email?.message}
          register={register}
          name="email"
        />
        <TextInput
          error={errors?.password?.message}
          register={register}
          name="password"
          type="password"
        />
        {loading ? (
          <p>lagi loading...</p>
        ) : (
          <Button
            type="submit"
            bgColor="bg-greenSecondary"
            textColor="text-white"
            label="Masuk"
          />
        )}
        <div className="flex justify-center mt-3">
          <p className="text-sm">
            Belum punya akun?
            <Link to="/signup">Daftar</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
