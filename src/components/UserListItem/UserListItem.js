import {useDispatch} from 'react-redux'
import {ButtonElement, ButtonIcon} from '../../common-components'
import {setTypeModal} from '../../store/reducers/typeModalReducer'
import {setIsAlertModalOpen} from '../../store/reducers/typeModalReducer'
import {StyledTableRow, StyledTableCell, ButtonsContainer} from  './UserListItemStyles'
import arrowDown from '../../assets/arrow_down.png'
import arrowUp from '../../assets/arrow_up.png'

const UserListItem = ({
    id,
    username,
    nickname,
    email,
    city,
    isTableHeader,
    handleSorting,
    handleSortingReverse,
}) => {
    const dispatch = useDispatch()


    const handleDelete = () => {
        dispatch(setIsAlertModalOpen(true))
        dispatch(setTypeModal({modalType: 'ALERT_MODAL', id}))
    }
    const handleEdit = () => dispatch(setTypeModal({modalType: 'EDIT_MODAL', id}))

    const editField = !isTableHeader ? (
        <ButtonElement 
            handleOnClick={() => handleEdit()}
            title='edit'
            color='orange'
            styles={{
                minWidth: '90px',
            }}
        />
    ) : 'edit' 

    const deleteField = !isTableHeader ? (
        <ButtonElement
            handleOnClick={() => handleDelete()}
            title='delete'
            color='red'
            styles={{
                minWidth: '90px',
            }}
        />
    ) : 'delete'

    return (
        <StyledTableRow 
            isTableHeader={isTableHeader}
        >
            <StyledTableCell align="center">
                {id}
            </StyledTableCell>
            <StyledTableCell align="center">
                {username}
            </StyledTableCell>
            <StyledTableCell sx={{position: 'relative'}} align="center">
                {nickname}
                {isTableHeader && (
                    <ButtonsContainer>
                        <ButtonIcon
                            handleOnclick={handleSortingReverse}
                            icon={arrowUp}
                        />
                        <ButtonIcon
                            handleOnclick={handleSorting}
                            icon={arrowDown}
                        />
                    </ButtonsContainer>
                )}
            </StyledTableCell>
            <StyledTableCell align="center">
                {email}
            </StyledTableCell>
            <StyledTableCell align="center">
                {city}
            </StyledTableCell>
            <StyledTableCell align="center">
                {editField}
            </StyledTableCell>
            <StyledTableCell align="center">
                {deleteField}
            </StyledTableCell>
      </StyledTableRow>
    )
}

export default UserListItem
