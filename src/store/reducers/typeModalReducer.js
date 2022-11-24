import {createSlice} from '@reduxjs/toolkit'

const setTypeModalReducer = createSlice({
    name: 'modal',
    initialState: {
        modalType: null,
        userId: null,
        isAlertModalOpen: false,
    },
    reducers: {
        setTypeModal: (state, action) => {
            state.modalType = action.payload.modalType
            state.userId = action.payload.id
        },
        setIsAlertModalOpen: (state, action) => {
            state.isAlertModalOpen = action.payload
        },
    }
})

export const {setTypeModal, setIsAlertModalOpen} = setTypeModalReducer.actions
export default setTypeModalReducer.reducer
