import { homeApi } from "@/services/home";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [] as any[],
};

export const HomeSlice = createSlice({
  name: "HomeSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      homeApi.endpoints.getCategories.matchFulfilled,
      (state, { payload }) => {
        state.categories = payload;
      }
    );
  },
  selectors: {
    getCategories: (state) => state.categories,
  },
});

export const { getCategories } = HomeSlice.selectors;
