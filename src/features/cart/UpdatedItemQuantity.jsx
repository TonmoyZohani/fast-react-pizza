import React from "react";
import { useDispatch } from "react-redux";
import { decreaseItemQuantiy, increaseItemQuantiy } from "./cartSlice";

const UpdatedItemQuantity = ({ pizzaId }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex" }}>
      <button onClick={() => dispatch(increaseItemQuantiy(pizzaId))}>+</button>
      <button onClick={() => dispatch(decreaseItemQuantiy(pizzaId))}>-</button>
    </div>
  );
};

export default UpdatedItemQuantity;
