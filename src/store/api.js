import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const strapiHost = process.env.NEXT_PUBLIC_STRAPI_HOST || 'http://localhost:1337';

const urlWithoutApi = strapiHost.endsWith('/api')
    ? strapiHost.slice(0, -4)
    : strapiHost;

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: strapiHost,
    }),
    endpoints: (builder) => ({
        getHeroSection: builder.query({
            query: (locale = 'en') => `/hero-contents?locale=${locale}&populate=image`,
            transformResponse: (response) => {
                return response.data.map(item => ({
                    title: item.title,
                    description: item.description,
                    imageUrl: item.image && item.image.length > 0
                        ? urlWithoutApi + item.image[0].url
                        : null,
                }));
            },
        }),
        getTeam: builder.query({
            query: (locale = 'en') => `/teams?locale=${locale}&populate=image`,
            transformResponse: (response) => {
                return response.data.map(item => ({
                    name: item.name,
                    position: item.position,
                    imageUrl: item.image && item.image.length > 0
                        ? urlWithoutApi + item.image[0].url
                        : null,
                }));
            },
        }),
        getCustomerFeedback: builder.query({
            query: (locale = 'en') => `/customer-feedbacks?locale=${locale}&populate=image`,
            transformResponse: (response) => {
                return response.data.map(item => ({
                    name: item.name,
                    position: item.position,
                    remarks: item.remarks,
                    imageUrl: item.image && item.image.length > 0
                        ? urlWithoutApi + item.image[0].url
                        : null,
                }));
            },
        }),
        subscribeEmail: builder.mutation({
            query: (email) => ({
                url: '/email-subscriptions',
                method: 'POST',
                body: { data: { email } },
            }),
        }),
    }),
});

export const {
    useGetHeroSectionQuery,
    useGetTeamQuery,
    useGetCustomerFeedbackQuery,
    useSubscribeEmailMutation
} = api;