import React from 'react'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import {LoadingSpinnerWrapper, Title} from './LoadingSpinnerStyles'

const override = {
    display: 'block',
    width: '60px',
    height: '40px',
    margin: '0',
    borderColor: 'red',
}

const LoadingSpinner = ({loading, color, size}) => (
    <LoadingSpinnerWrapper>
        <Title>Loading...</Title>
        <ClimbingBoxLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={size}
            aria-label="ClimbingBoxLoader"
            data-testid="loader"
        />
    </LoadingSpinnerWrapper>
)

export default LoadingSpinner
