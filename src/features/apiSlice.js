import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const animeApi = createApi({
    reducerPath: "animeApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://kitsu.io/api/edge/" }),
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            query: () => "categories"
        }),
        getCategorizedAnimes: builder.query({
            query: (id) => `categories/${id}/anime`,
        })
    }),
});

export const { useGetAllCategoriesQuery, useGetCategorizedAnimesQuery } = animeApi