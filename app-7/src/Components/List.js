import React from "react";

import Todo from "./Todo";

const List = (props) => {
  const { tasks } = props;

  return (
    <div>
      {tasks.map((el, i) => <Todo key={i} task={el} /> )}
    </div>
  );
};

export default List;
