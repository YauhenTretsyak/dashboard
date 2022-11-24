import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import {getUsersData} from '../../store/reducers/userDataReducer'
import {LoadingSpinner} from '../../common-components'
import {UserListBar, UserListTable, EditForm} from '..'
import {ContainerElement, AppBarElement, TypographyStyled} from './MainStyles'

const Main = () => {
    const dispatch = useDispatch()
    const {users, loading} = useSelector(state => state.usersData)

    const {userId, modalType} = useSelector(state => state.typeModal)

    useEffect(() => {
        if (users !== null) return
        dispatch(getUsersData())
    }, [])

    let titleBar
    let content

    switch (modalType) {
        case 'ADD_MODAL': 
            titleBar = <TypographyStyled 
                variant="h6" component="div" 
                sx={{flexGrow: 1, padding: '30px 20px', fontWeight: '700'}}
            >
                Form
            </TypographyStyled>
            content = <EditForm modalType={modalType} id={userId}/>
            break
        case 'EDIT_MODAL': 
            titleBar = <TypographyStyled 
                variant="h6" component="div" 
                sx={{flexGrow: 1, padding: '30px 20px', fontWeight: '700'}}
            >
                Form
            </TypographyStyled>
            content = <EditForm modalType={modalType} id={userId}/>
            break
        default: 
            titleBar = <UserListBar />
            content = <UserListTable />
            break
    }

    return (
    <Container maxWidth="lg">
        <Box>
            <Typography sx={{ fontWeight: 800 }} variant="h2" component="h1" gutterBottom>
                Dashboard
            </Typography>
            <Box sx={{ flexGrow: 1}}>
                <AppBarElement sx={{ backgroundColor: 'white', color: 'black' }} position="static">
                    {titleBar}
                </AppBarElement>
            </Box>
                
            <ContainerElement sx={{ justifyContent: 'center', display: 'flex', color: 'black'}}>
                {loading ? 
                    <LoadingSpinner 
                        loading={loading}
                        color="#cfc600"
                        size={'10px'}
                        titleSize="3"
                    /> : 
                    content
                }
            </ContainerElement>
        </Box>
    </Container>
    )
}

export default Main
