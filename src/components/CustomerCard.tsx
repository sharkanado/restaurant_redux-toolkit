import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFood } from "../features/customerSlice";
interface Props {
  id: number;
  name: string;
  food: string[];
}

export default function CustomerCard({ id, name, food }: Props) {
  const [order, setOrder] = useState<string>("");
  const dispatch = useDispatch();
  return (
    <div>
      <div className="customer-food-card-container">
        <p>{name}</p>
        <div className="customer-foods-container">
          <div className="customer-food">
            {food.map((food, idx) => (
              <p key={idx}>{food}</p>
            ))}
          </div>

          <div className="customer-food-input-container">
            <input
              value={order}
              onChange={(e) => {
                setOrder(e.target.value);
              }}
            />
            <button
              onClick={() => {
                dispatch(addFood({ id: id, food: order }));
                setOrder("")
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
