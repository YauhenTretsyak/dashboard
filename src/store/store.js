import {configureStore} from '@reduxjs/toolkit'
import getUsersDataReducer from './reducers/userDataReducer'
import setTypeModalReducer from './reducers/typeModalReducer'

export const store = configureStore({
    reducer: {
        usersData: getUsersDataReducer,
        typeModal: setTypeModalReducer,
    },
})
