import * as React from "react";
import Form from "./form";
import Modal from "components/Modal";

export default function TodosCreate({ show, close, idTodos }) {
  return (
    <Modal
      maxWidth="max-w-576px"
      width="w-576px"
      show={show}
      title="Create Task"
      content={<Form close={close} idTodos={idTodos} />}
    />
  );
}
