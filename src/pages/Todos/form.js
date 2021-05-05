import * as React from "react";
import TextInput from "components/TextInput";
import Button from "components/Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { postData, patchData } from "utils/fetchData";
import { useDispatch } from "react-redux";
import { fetchTodos } from "features/Todos/actions";

const schema = yup.object().shape({
  name: yup.string().required("nama taks tidak boleh kosong."),
  progress_percentage: yup.string().required("progress tidak boleh kosong."),
});

export default function TodosForm({ close, idTodos, type, data, idItems }) {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, setError, setValue } = useForm({
    mode: "onBlur",
    validationSchema: schema,
  });
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      if (type === "edit") {
        data.target_todo_id = idTodos;
        const res = await patchData(`todos/${idTodos}/items/${idItems}`, data);

        if (res.status === 200) {
          setLoading(false);
          dispatch(fetchTodos());
          close();
          setValue("name", "");
          setValue("progress_percentage", "");
        }
      } else {
        const res = await postData(`todos/${idTodos}/items`, data);
        if (res.status === 201) {
          setLoading(false);
          dispatch(fetchTodos());
          close();
          setValue("name", "");
          setValue("progress_percentage", "");
        }
      }
    } catch (error) {
      setLoading(false);
      if (error.response.status === 401) {
        setError("server", "server", "Terjadi kesalahan pada server");
      }
    }
  };

  React.useEffect(() => {
    if (type === "edit") {
      const getOneTodo = () => {
        setValue("name", data.name);
        setValue("progress_percentage", data.progress_percentage);
      };
      getOneTodo();
    }
  }, [idItems]);
  return (
    <form onSubmit={!loading ? handleSubmit(onSubmit) : null}>
      <div className="pb-6">
        <p className="text-xs leading-4 mb-1">Task Name</p>
        <TextInput
          error={errors?.name?.message}
          register={register}
          name="name"
          className="mt-2"
        />
        <p className="text-xs leading-4 mb-1 mt-2">Progress</p>
        <div className="w-99px">
          <TextInput
            placeholder="0 %"
            error={errors?.progress_percentage?.message}
            register={register}
            type="number"
            name="progress_percentage"
          />
        </div>
      </div>
      <div className="flex items-center w-full justify-end">
        <Button
          bgColor="white"
          borderColor="graySecondary"
          textColor="text-darkSecondary"
          label="Cancel"
          onClick={close}
          className="mr-2"
        />

        <Button
          bgColor="bg-greenSecondary"
          textColor="text-white"
          label={`${loading ? "Loading..." : "Save Task"}`}
          type="submit"
        />
      </div>
    </form>
  );
}
