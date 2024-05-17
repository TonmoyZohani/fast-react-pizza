import React from "react";
import { useDispatch } from "react-redux";
import { decreaseItemQuantiy, increaseItemQuantiy } from "./cartSlice";

const UpdatedItemQuantity = ({ pizzaId, currentQuantity }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex" }}>
      <button onClick={() => dispatch(increaseItemQuantiy(pizzaId))}>+</button>
      <span>{currentQuantity}</span>
      <button onClick={() => dispatch(decreaseItemQuantiy(pizzaId))}>-</button>
    </div>
  );
};

export default UpdatedItemQuantity;
