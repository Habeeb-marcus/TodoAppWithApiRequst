import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Todo = () => {
  const { id } = useParams();
  const [todoDetails, setTodoDetails] = useState();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        const responseTodo = res.data;
        setTodoDetails(responseTodo);
      });
  }, []);
  const { id: todoId, userId, title, completed } = todoDetails || {};
  return (
    <div>
      {todoDetails ? (
        <div>
          <h1> {`Todo id: ${todoId}`} </h1>
          <h1> {`Todo userId: ${userId}`} </h1>
          <h1> {`Todo title: ${title}`} </h1>
          <h1> {`Todo completed: ${completed}`} </h1>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Todo;
