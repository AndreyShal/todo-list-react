import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import "./styles/index.scss";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import CreateTask from "./components/CreateTask";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";

function App() {
  const { Button, Textarea } = chakraTheme.components;

  const theme = extendBaseTheme({
    components: {
      Button,
      Textarea,
    },
  });

  return (
    <ChakraBaseProvider theme={theme}>
      <Box backgroundColor={"whiteAlpha.50"} className="app">
        <div className="app__container">
          <Header />
          <CreateTask />
          <TodoList />
        </div>
      </Box>
    </ChakraBaseProvider>
  );
}

export default App;

// npx json-server --watch db.json --port 8080
