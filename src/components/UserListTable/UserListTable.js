import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import _ from 'lodash'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import {TableBody} from '@mui/material'
import Paper from '@mui/material/Paper'
import {AlertModalWrapper} from './UserListTableStyles'
import {NoDataSpinner} from '../../common-components'
import {UserListItem, AlertModal} from '..'

const UserListTable = () => {
    const usersData = useSelector(state => state.usersData.users)
    const {isAlertModalOpen} = useSelector(state => state.typeModal)
    const [users, setUsers] = useState([])
    const isNoData = usersData && usersData?.length === 0

    useEffect(() => {
        if (usersData) setUsers(usersData)
    }, [usersData])

    

    const handleSorting = () => {
        const sortedData = _.sortBy(users, [function(o) { return o.username; }])
        setUsers(sortedData)
    }
 
    const handleSortingReverse = () => {
        const sortedData = _.sortBy(users, [function(o) { return o.username; }]).reverse()
        setUsers(sortedData)
    }
    
    const userItemsList = users && users?.map(item => (
        <UserListItem 
            key={item.id}
            id={item.id}
            username={item.name ?? '--'}
            nickname={item.username ?? '--'}
            email={item.email ?? '--'}
            city={item.address?.city ?? '--'}
        />
    ))

    const Content = () => (
        <TableContainer component={Paper}>
            <AlertModalWrapper isAlertModalOpen={isAlertModalOpen}>
                <AlertModal />
            </AlertModalWrapper>
            <Table aria-label="customized table">
                <TableHead>
                    <UserListItem 
                        id='id'
                        username='Name'
                        nickname='Username'
                        email='Email'
                        city='City'
                        isTableHeader={true}
                        handleSorting={handleSorting}
                        handleSortingReverse={handleSortingReverse}
                    />
                </TableHead>
                <TableBody>
                    {userItemsList}
                </TableBody>
            </Table>
        </TableContainer>
    )

    const Spinner = () => (
        <NoDataSpinner
            loading={isNoData}
            color="#cfc600"
            size={'20px'}
            titleSize="3"
        />
    )

    const content = isNoData ? <Spinner /> : <Content />

    return(
        <>
            {content}
        </>
    )
}

export default UserListTable
