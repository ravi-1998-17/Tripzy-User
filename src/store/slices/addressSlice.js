import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
    name: "address",
    initialState: {
        addressList: [],
        selectedAddress: null,
    },
    reducers: {
        addAddress(state, action) {
            state.addressList.push(action.payload);
        },
        selectAddress(state, action) {
            state.selectedAddress = action.payload;
        }
    }
})

export const { addAddress, selectAddress } = addressSlice.actions;
export default addressSlice.reducer;