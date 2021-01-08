import {createSlice} from '@reduxjs/toolkit'
import { getArticelAll , getArticelOne} from '../api'

const slice = createSlice({
    name: 'article',
    initialState: [],
    reducers: {
        getProps: (state,action) => {
            state = action.payload
            return state
        }
    }
})
export default slice.reducer
const {getProps} = slice.actions

export const getArticel = () => async dispatch => {
    try {
        const res = await getArticelAll()
        dispatch(getProps(res))
    }
    catch (e) {
        console.log('Error ', e.message)
    }
}

export const getArticelId = () => async dispatch => {
    try {
        const res = await getArticelOne()
        dispatch(getProps(res))
    }
    catch (e) {
        console.log('Error ', e.message)
    }
}
