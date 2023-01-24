import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        updateCategories: (state, action) => {
            state.value = action.payload
        },

    },
})

export const { updateCategories } = categorySlice.actions

export default categorySlice.reducer