import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import categoriesReducer from '../features/categories/categorySlice';
import { combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist';


import { animeApi } from '../features/apiSlice';

const reducers = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    [animeApi.reducerPath]: animeApi.reducer,
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['api'],
    whitelist: ['user', 'categories']
};

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) => {
        const middleware = getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
            .concat(animeApi.middleware)
        return middleware
    },
    devTools: process.env.NODE_ENV !== 'production',


});

export default store;

// export const store = configureStore({
//     reducer: persistedReducer,
//     // [animeApi.reducerPath]: animeApi.reducer,

//     devTools: process.env.NODE_ENV !== 'production',
//     middleware: [thunk]
// });

// export default store;