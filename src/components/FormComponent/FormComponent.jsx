import { useState } from "react";
import InputComponent from "../InputComponent/InputComponent";

export default function FormComponent({addTodoHandler}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const data = {title, description};

    addTodoHandler(data);

    setTitle("");
    setDescription("");
  };
  return (
    <form className="card m-5" onSubmit={formSubmitHandler}>
      <InputComponent title={"عنوان کار"} setText={setTitle} text={title} />

      <InputComponent
        title={"توضیحات"}
        setText={setDescription}
        text={description}
      />
      <button
        className="btn btn-success btn-lg m-3"
        style={{
          width: "30%",
        }}
        type="submit"
      >
        ثبت
      </button>
    </form>
  );
}
