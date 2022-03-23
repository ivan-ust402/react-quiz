//Функция, объединяющая все редьюсеры
import { combineReducers } from 'redux'
import authReducer from './auth'
import createReducer from './create'
import quizReducer from './quiz'

export default combineReducers({ //объект конфигурации с описанием всех наших редьюсеров
    quiz: quizReducer,
    create: createReducer,
    auth: authReducer
})