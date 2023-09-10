import { SyntheticEvent, useState } from "react";
import { useCreateTodoMutation } from "../../store/api/todo.api";
import { Textarea, Button, Text } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import "./index.scss";
import clsx from "clsx";

interface FormElements extends HTMLFormControlsCollection {
  yourInputName: HTMLInputElement;
}

interface YourFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

const CreateTask = () => {
  const [value, setValue] = useState("");
  const toast = useToast();

  const [addTodo, { isLoading: isCreating }] = useCreateTodoMutation();

  const handleSubmit = (e: React.FormEvent<YourFormElement>) => {
    e.preventDefault();
    addTodo({ task: value, done: false }).then(() => setValue(""));
    clsx(
      isCreating &&
        toast({
          title: "Todo created.",
          description: "We've created your todo for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
    );
  };

  return (
    <div>
      <Text fontWeight="bold">Create a new todo:</Text>
      <form onSubmit={handleSubmit}>
        <div className="create-task">
          <Textarea id="yourInputName" value={value} onChange={(e) => setValue(e.target.value)} />
          <Button type="submit" isLoading={isCreating} loadingText="created" colorScheme="teal">
            Create
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
