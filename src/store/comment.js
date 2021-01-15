import {createSlice} from '@reduxjs/toolkit'
import { postcomment, getcommentid } from '../api'

const slice = createSlice({
    name: 'comment',
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

export const getcomment = (postid) => async dispatch => {
    try {
        const res = await  getcommentid(postid)
        dispatch(getProps(res))
    }
    catch (e) {
        console.log('Error ', e.message)
    }
}

export const addcomment = (id,content) => async dispatch => {
    try {
        const res = await postcomment(id,content)
        dispatch(getProps(res))
    }
    catch (e) {
        console.log('Error ', e.message)
    }
}
