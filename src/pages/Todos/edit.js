import * as React from "react";
import Form from "./form";
import Modal from "components/Modal";

export default function TodosCreate({ show, close, idTodos, data, idItems }) {
  return (
    <Modal
      maxWidth="max-w-576px"
      width="w-576px"
      show={show}
      title="Update Task"
      content={
        <Form
          close={close}
          idTodos={idTodos}
          idItems={idItems}
          type="edit"
          data={data}
        />
      }
    />
  );
}
