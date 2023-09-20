import { apiSlice } from "../../features/api/apiSlice";

export const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
    }),

    /** update Approver */
    getUserApprovedById: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: {
          approved: true,
        },
      }),
    }),
    /** end approved */
  }),
});

export const { useGetUsersQuery, useGetUserApprovedByIdMutation } = usersApi;
