import styled from "styled-components"

export const InputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`
export const InputStyled = styled.input`
    width: 60%;
    padding: 10px;
    border: 1px solid #d5d3d3;
    border-radius: 2px;
`
export const Label = styled.label`
    width: 40%;
    text-align: center;
`
export const Error = styled.span`
    position: absolute;
    bottom: -23px;
    right: 0;
    display: none;
    display: ${({isError}) => isError && 'block'};
    color: red;
`
