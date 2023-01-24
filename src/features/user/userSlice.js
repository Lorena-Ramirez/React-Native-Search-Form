import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: { firstName: "" },
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateName: (state, action) => {
            state.value = action.payload
        },
        updateCategoryId: (state, action) => {
            state.value = { ...state.value, categoryId: action.payload };
        },
        // updateAnimeHistory: (state, action) => {
        //     state.value = { ...state.value, animeHistory: action.payload };
        // },
        // showPrevious: (state, action) => {
        //     state.value = action.payload
        // },
    },
})

export const { updateName, updateCategoryId, updateAnimeHistory, showPrevious } = userSlice.actions

export default userSlice.reducer