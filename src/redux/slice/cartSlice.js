import { createSlice } from '@reduxjs/toolkit';
import removeItemOnce from '../../helpers/removeItemFromArray';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: [],
	reducers: {
		addItem: (state, action) => {
			// add item logic
		},
		removeItem: (state, action) => {
			// remove item login
		},
		emptyCart: (state) => {
			state.value = [];
		},
	},
});

export const { addItem, removeItem, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
