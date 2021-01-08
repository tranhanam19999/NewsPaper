import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import article from './article'
import user from './user'
import comment from './comment'

const reducer = combineReducers({
    article,
    user,
    comment



})

const store = configureStore({
    reducer,
})
export default store