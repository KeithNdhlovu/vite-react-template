import { IBlock, IUser } from '@relay/interfaces'
import { api, defaultApiVersion } from '@relay/services/api'
import { TBlockRequest, TProfileRequest } from '@relay/types'

const profileApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query<IUser, Partial<TProfileRequest>>({
      query: (data) => {
        return {
          url: `${defaultApiVersion}/me`,
          params: data,
        }
      },
      providesTags: () => ['Profile'],
    }),
    getBlock: build.query<IBlock, Partial<TBlockRequest>>({
      query: (data) => {
        return {
          url: `${defaultApiVersion}/block`,
          params: data,
        }
      },
      providesTags: () => ['Block'],
    }),
  }),
})

export const {
  useGetProfileQuery,
  useLazyGetProfileQuery,
  useGetBlockQuery,
  useLazyGetBlockQuery,
} = profileApi

export default profileApi
