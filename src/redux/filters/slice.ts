import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Filters {
  categories: string[];
}

const filtersInitialState: Filters = {
  categories: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setCategoriesFilters(state, action: PayloadAction<string[]>) {
      state.categories = action.payload;
    },
    addCategoriesFilters(state, action: PayloadAction<string>) {
      state.categories.push(action.payload);
    },
    removeCategoriesFilters(state, action: PayloadAction<string>) {
      state.categories = state.categories.filter((category) => category !== action.payload);
    },
  },
});

export const { setCategoriesFilters, addCategoriesFilters, removeCategoriesFilters } =
  filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
