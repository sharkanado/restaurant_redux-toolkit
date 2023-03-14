import React from "react";
import { useDispatch } from "react-redux";
import { addCustomer } from "../features/customerSlice";
import { removeReservation } from "../features/reservationSlice";

interface Props {
  name: string;
  index: number;
}

export default function ReservationCard({ name, index }: Props) {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(removeReservation(index));
        dispatch(addCustomer(name));
      }}
      className="reservation-card-container"
    >
      {name}
    </div>
  );
}
