import * as React from "react";
import Modal from "components/Modal";
import IconWarning from "assets/icon/Warning";
import Button from "components/Button";
import { deleteData } from "utils/fetchData";
import { useDispatch } from "react-redux";
import { fetchTodos } from "features/Todos/actions";

export default function TodosDelete({ show, close, idTodos, idItems }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async () => {
    try {
      setLoading(true);
      const res = await deleteData(`todos/${idTodos}/items/${idItems}`);

      if (res.status === 204) {
        setLoading(false);
        dispatch(fetchTodos());
        close();
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <Modal
      show={show}
      title="Delete Task"
      icon={<IconWarning className="mr-4" />}
      content={
        <div>
          <p className="text-sm leading-22">
            Are you sure want to delete this task?
            <br />
            your action can’t be reverted.
          </p>
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
              bgColor="bg-red"
              textColor="text-white"
              label={`${loading ? "Loading..." : "Delete"}`}
              onClick={!loading ? onSubmit : null}
            />
          </div>
        </div>
      }
    />
  );
}
