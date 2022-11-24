import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getUsersData = createAsyncThunk(
    'users/usersData',
    async () => {
      const response = await fetch(`https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/`)
      return (await response.json())
    }
)

const getUsersDataReducer = createSlice({
    name: 'users',
    initialState: {
        users: null,
        loading: true,
        error: false,
    },
    reducers: {
        addUser: (state, action) => {
            state.users = state.users.concat(action.payload)
        },
        removeUser: (state, action) => {
            state.users = state.users.filter(item => item.id !== action.payload.id)
        },
        editUser: (state, action) => {
            const usersData = state.users
            const index = state.users.findIndex(elem => elem.id === action.payload.id)
            const edittingData = [...usersData.slice(0, index), action.payload, ...usersData.slice(index + 1)]
            state.users = edittingData
        },
    },

    extraReducers: {
        [getUsersData.pending]: (state) => {
            state.loading = true
            state.error = false
        },
        [getUsersData.fulfilled]: (state, action) => {
            state.loading = false
            state.users = action.payload
        },
        [getUsersData.rejected]: (state) => {
            state.loading = false
            state.error = true
        }
    }
})

export const {addUser, removeUser, editUser} = getUsersDataReducer.actions
export default getUsersDataReducer.reducer
