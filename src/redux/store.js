
import { configureStore } from 'react-redux';
import todoReducer from './todoSlice';

export const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
});
