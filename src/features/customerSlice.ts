import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CustomerState {
  value: Customer[];
}
interface Customer {
  name: string;
  id: number;
  food: string[];
}

interface AddFoodToCustomerPayload {
  food: string;
  id: number;
}
const initialState: CustomerState = { value: [] };

export const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    addFood: (state, action: PayloadAction<AddFoodToCustomerPayload>) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id)
          customer.food.push(action.payload.food);
      });
    },
  },
});

export const { addCustomer, addFood } = customerSlice.actions;
export default customerSlice.reducer;
