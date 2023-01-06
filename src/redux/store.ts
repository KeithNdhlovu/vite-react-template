import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit'

import authReducer from '@relay/redux/authSlice'
import counterReducer from '@relay/redux/counterSlice'
import { api } from '@relay/services/api'

const createStore = (options?: ConfigureStoreOptions['preloadedState'] | undefined) =>
  configureStore({
    reducer: {
      counter: counterReducer,
      auth: authReducer,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
    ...options,
  })

const store = createStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
