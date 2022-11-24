import React from 'react'
import PacmanLoader from 'react-spinners/PacmanLoader'
import {NoDataSpinnerWrapper, Title} from './NoDataSpinnerStyles'

const override = {
    display: 'block',
    width: '60px',
    height: '40px',
    margin: '0',
    borderColor: 'red',
}

const NoDataSpinner = ({loading, color, size}) => (
    <NoDataSpinnerWrapper>
        <Title>No data :(</Title>
        <PacmanLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={size}
            aria-label="PacmanLoader"
            data-testid="loader"
        />
        <Title>Add new user :)</Title>
    </NoDataSpinnerWrapper>
)

export default NoDataSpinner
