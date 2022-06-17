import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BloodTest } from "../domain/BloodTestEntity";

export interface BloodTestState {
  bloodTests: BloodTest[]
}

const initialState: BloodTestState = {
  bloodTests: [{ sugar: 5, fat: 5, oxygen: 5, idNumber: '1001' }]
}

const bloodTestSlice = createSlice({
  name: 'bloodTest',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<BloodTest>) => {
      state.bloodTests.push(action.payload)
    }
  }
})

export const { add } = bloodTestSlice.actions;
export default bloodTestSlice.reducer;