import styled from "styled-components"
import Container from '@mui/material/Container'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'

export const AppBarElement = styled(AppBar)`
    padding: 0;
    box-shadow: none;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
`

export const TypographyStyled = styled(Typography)`
    padding-left: 24px;
    padding-right: 24px;
    min-height: 24px;
`

export const ContainerElement = styled(Container)`
    display: flex;
    justify-content: center;
    color: white;
    padding: 10px !important;
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;
