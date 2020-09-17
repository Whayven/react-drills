import React from "react";

const Todo = (props) => {
  const { task } = props;
  return <h4>{task}</h4>;
};

export default Todo;
