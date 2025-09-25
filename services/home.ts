import { Category } from "@/types/category";
import { Question } from "@/types/question";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.EXPO_PUBLIC_API_URL;

export const homeApi = createApi({
  reducerPath: "homeApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => `getCategories`,
      transformResponse: (response: { data: Category[] }) => response.data,
    }),
    getQuestions: builder.query<Question[], void>({
      query: () => `getQuestions`,
    }),
  }),
});

export const { useGetCategoriesQuery, useGetQuestionsQuery } = homeApi;
