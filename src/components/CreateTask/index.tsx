import { SyntheticEvent, useState } from "react";
import { useCreateTodoMutation } from "../../store/api/todo.api";
import "./index.scss";

interface FormElements extends HTMLFormControlsCollection {
  yourInputName: HTMLInputElement;
}

interface YourFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

const CreateTask = () => {
  const [value, setValue] = useState("");

  const [addTodo] = useCreateTodoMutation();

  const handleSubmit = (e: React.FormEvent<YourFormElement>) => {
    e.preventDefault();
    addTodo({ task: value, done: false }).then(() => setValue(""));
  };

  return (
    <div>
      <p>Create a new task:</p>
      <div className="create-task">
        <form onSubmit={handleSubmit}>
          <label htmlFor="yourInputName">
            <input id="yourInputName" type="text" value={value} onChange={(e) => setValue(e.target.value)} />
          </label>
          <button type="submit">create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
