import { PlantCategory } from "@/types/category";
import { Question } from "@/types/question";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const homeApi = createApi({
  reducerPath: "homeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummy-api-jtg6bessta-ey.a.run.app/",
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<PlantCategory[], void>({
      query: () => `getCategories`,
    }),
    getQuestions: builder.query<Question[], void>({
      query: () => `getQuestions`,
    }),
  }),
});

export const { useGetCategoriesQuery, useGetQuestionsQuery } = homeApi;
