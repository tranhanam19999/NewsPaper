import {createSlice} from '@reduxjs/toolkit'
import {login,register, getUserAll} from '../api'
const initialUser = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null

const slice = createSlice ({
    name: 'user',
    initialState: initialUser,
    reducers: {
        loginSuccess: (state,action) => {
            state = action.payload
            return state
        },
        registerSuccess: (state,action) => {
          state = action.payload
          return state
      },
        logoutSuccess: (state, action) => {
            state =  null
            return state
        },
        updateSuccess: (state, action) => {
            state = action.payload
            return state
        },
        getProps: (state,action) => {
          state = action.payload
          return state
      }
    }
})
export default slice.reducer
const {getProps} = slice.actions


export const {loginSuccess, registerSuccess,  logoutSuccess, updateSuccess} = slice.actions
export const loginuser = ( username, password ) => async dispatch => {
    
    try {
      const res = await login(username, password)
      if(res[0] != null) {
        if (res[0]._id != null) {
          dispatch(loginSuccess(res[0]))
          localStorage.setItem('user', JSON.stringify(res[0]))
        }
      }
      else {
        alert('Check your email or password!')
      }
    } catch (e) {
      return console.error(e.message);
    }
}
export const registeruser = (name, username, password ) => async dispatch => {
  try {
    const res = await register(name,username, password)
    if(res!= null) {
      
        dispatch(registerSuccess(res))
       
      
    }
    else {
      alert('Check input!')
    }
  } catch (e) {
    return console.error(e.message);
  }
}

export const logout = () => async dispatch => {
    try {
      return dispatch(logoutSuccess())
    } catch (e) {
      return console.error(e.message);
    }
}




export const getuser = () => async dispatch => {
  try {
      const res = await getUserAll()
      dispatch(getProps(res))
  }
  catch (e) {
      console.log('Error ', e.message)
  }
}

// export const updateProfile = (user) => async dispatch => {
//   try {
//     const res = await updateUser(user)
//     dispatch(updateSuccess(res))
//   }
//   catch (e) {
//     return console.error(e.message);
//   }
// }