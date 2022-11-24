import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {editUser, addUser} from '../../store/reducers/userDataReducer'
import {setTypeModal} from '../../store/reducers/typeModalReducer'
import {updateData} from '../../services/updateDataServer'
import {ButtonElement, Input} from '../../common-components'
import {Form, ButtonsWrapper} from './EditFormStyles'


const EditForm = ({id, modalType}) => {
    const dispatch = useDispatch()
    const userData = useSelector(state => state.usersData?.users)?.find(item => item.id === id)

    const [updatedUserData, setUpdatedUserData] = useState({})
    const [inputsErrors, setInputsErrors] = useState({name: false, email: false})
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true)
    const regexEmail = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/


    const validationEmail = (value) => {
        return regexEmail.test(value)
    }

    useEffect(() => {
        if (userData) {
            setUpdatedUserData(userData)
        }
    }, [id])

    const handleOnChange = (data, inputType) => {
        if (inputType === 'name') {
            setUpdatedUserData({...updatedUserData, name: data})
            
            if (data.length > 2) {
                setInputsErrors({...inputsErrors, name: false})
                setIsSubmitDisabled(false)
            } else {
                setInputsErrors({...inputsErrors, name: true})
                setIsSubmitDisabled(true)
            }
        }
        if (inputType === 'email') {
            const isMailCorrect = validationEmail(data)
            setUpdatedUserData({...updatedUserData, email: data})
            setInputsErrors({...inputsErrors, email: false})

            if (isMailCorrect) {
                setInputsErrors({...inputsErrors, email: false})
                setIsSubmitDisabled(false)
            } else {
                setInputsErrors({...inputsErrors, email: true})
                setIsSubmitDisabled(true)
            }
        } 
    }

    const handleSubmit = () => {
        if (inputsErrors.name || inputsErrors.email) return

        if (modalType === 'EDIT_MODAL') {
            dispatch(editUser(updatedUserData))
            updateData(updatedUserData, id, 'PUT')
        }
        if (modalType === 'ADD_MODAL') {
            const newData = {...updatedUserData, id}
            dispatch(addUser({...updatedUserData, id}))
            updateData(newData, id, 'POST')
        }
        dispatch(setTypeModal({modalType: null, userId: null}))
    }

    const handleCancel = () => {
        dispatch(setTypeModal({modalType: null, userId: null}))
    }

    return (
        <Form onSubmit={() => handleSubmit()}>
            <Input
                isRequired={true}
                isError={inputsErrors.name}
                title=' Name:'
                type='text'
                value={updatedUserData.name ?? ''}
                handleOnChange={handleOnChange}
                typeData='name'
                errorMessage='Name length less than 2'
            />
            <Input
                isRequired={true}
                isError={inputsErrors.email}
                title='Email:'
                type='email'
                value={updatedUserData.email ?? ''}
                handleOnChange={handleOnChange}
                typeData='email'
                errorMessage='Enter correct email!'
            />
            <ButtonsWrapper>
                <ButtonElement
                    handleOnClick={handleCancel}
                    title='Cancel'
                    color='white'
                    styles={{
                        width: '90px',
                        border: '1px solid red',
                        color: 'red',
                    }}
                />
                <ButtonElement
                    isDisabled={isSubmitDisabled}
                    type='submit'
                    color='green'
                    title='Submit'
                    styles={{
                        width: '90px',
                    }}
                />
            </ButtonsWrapper>
        </Form>
    )
}

export default EditForm
