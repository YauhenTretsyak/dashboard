import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import {setTypeModal} from '../../store/reducers/typeModalReducer'
import {ButtonElement} from '../../common-components'

const UserListBar = () => {
    const dispatch = useDispatch()
    const usersData = useSelector(state => state.usersData.users)
    const [newId, setNewId] = useState(null)
    

    const handleOpenModal = () => {
        dispatch(setTypeModal({modalType: 'ADD_MODAL', id: newId}))
    }

    useEffect(() => {
        if (usersData && usersData.length > 0) {
            const availibleIds = usersData.map(item => item.id).sort((a, b) => a - b)
            const lastIndexIds = availibleIds.length - 1
            setNewId(availibleIds[lastIndexIds] + 1)
        } else {
            setNewId(1)
        }
    }, [usersData])

    return (

        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                User list
            </Typography>
            <ButtonElement
                title='Add new'
                color='blue'
                handleOnClick={() => handleOpenModal()}
                styles={{
                    minWidth: '150px',
                }}
            />
        </Toolbar>

    );
}

export default UserListBar
