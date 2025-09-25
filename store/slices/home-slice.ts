import { homeApi } from "@/services/home";
import { Category } from "@/types/category";
import { Question } from "@/types/question";
import { createSlice } from "@reduxjs/toolkit";

interface HomeState {
  categories: Category[];
  questions: Question[];
}

const initialState: HomeState = {
  categories: [],
  questions: [],
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
    builder.addMatcher(
      homeApi.endpoints.getQuestions.matchFulfilled,
      (state, { payload }) => {
        state.questions = payload;
      }
    );
  },
  selectors: {
    getCategories: (state) => state.categories,
    getQuestions: (state) => state.questions,
  },
});

export const { getCategories, getQuestions } = HomeSlice.selectors;
