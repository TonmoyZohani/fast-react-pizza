import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();

  return (
    <button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </button>
  );
};

export default DeleteItem;
