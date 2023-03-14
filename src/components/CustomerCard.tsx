import React from "react";
interface Props {
  name: string;
  //food: string[];
}

export default function CustomerCard({ name }: Props) {
  return (
    <div>
      <div className="customer-food-card-container">
        <p>{name}</p>
        <div className="customer-foods-container">
          <div className="customer-food">a</div>

          <div className="customer-food-input-container">
            <input />
            <button>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}
