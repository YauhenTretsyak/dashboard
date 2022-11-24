import {useSelector, useDispatch} from 'react-redux'
import {setIsAlertModalOpen, setTypeModal} from '../../store/reducers/typeModalReducer'
import {removeUser} from '../../store/reducers/userDataReducer'
import {deleteDataServer} from '../../services/deleteDataServer'
import {ButtonElement} from "../../common-components"
import {CardStyled, TypographyStyled, ButtonsWrapper, Paragraph} from './AlertModalStyles'

const AlertModal = () => {
    const dispatch = useDispatch()
    const {userId} = useSelector(state => state.typeModal)

    const handleCancelModal = () => {
        dispatch(setTypeModal({modalType: null, userId: null}))
        dispatch(setIsAlertModalOpen(false))
    }

    const handleDeleteUser = () => {
        deleteDataServer(userId)
        dispatch(removeUser({id: userId}))
        dispatch(setTypeModal({modalType: null, userId: null}))
        dispatch(setIsAlertModalOpen(false))
    }


    return(
        <CardStyled>
            <TypographyStyled variant="h4" component="div" sx={{ flexGrow: 1 }}>Delete</TypographyStyled>
            <Paragraph variant="body1">
                Delete user with id: {userId}?
            </Paragraph>
            <ButtonsWrapper>
                <ButtonElement
                    title='Cancel'
                    handleOnClick={() => handleCancelModal()}
                    color='grey'
                />
                <ButtonElement
                    title='Delete'
                    color='red'
                    handleOnClick={() => handleDeleteUser()}
                    styles={{
                        width: '120px',
                    }}
                />
            </ButtonsWrapper>
        </CardStyled>
    )
}

export default AlertModal
