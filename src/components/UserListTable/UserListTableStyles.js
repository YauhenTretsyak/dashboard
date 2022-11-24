import styled from "styled-components"

export const AlertModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: ${({isAlertModalOpen}) => isAlertModalOpen ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    background-color: #00000096;
    width: 100%;
    height: 100vh;
    z-index: 10;
`
