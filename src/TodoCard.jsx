import React from "react";
import { useHistory } from "react-router-dom";

const TodoCard = (props) => {
  const { todo } = props;
  const { id, title, completed } = todo;
  let history = useHistory();

  return (
    <div
      style={{
        backgroundColor: "grey",
        margin: "10px",
        padding: "14px",
        width: "150px"
      }}
      onClick={() => history.push(`/todo/${id}`)}
    >
      <h4> {title} </h4>
      <h6> {`completed: ${completed}`} </h6>
    </div>
  );
};

export default TodoCard;
