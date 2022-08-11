import React, { useReducer } from "react";
import comments from "./data";
export const Database = React.createContext();

const reducer = (state, action) => {
  const type = action.type;
  const payload = action.payload;
  switch (type) {
    case "add":
      createComment(payload.text, payload.parentId);
      break;
  }
};

const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString().substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "John",
    createdAt: new Date().toISOString(),
  };
};

export default function Context({ children }) {
  const [comment, dispatch] = useReducer(reducer, comments);
  return <Database value={{ comment, dispatch }}>{children}</Database>;
}
