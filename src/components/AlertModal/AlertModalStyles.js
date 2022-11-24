import styled from "styled-components"
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

export const CardStyled = styled(Card)`
    padding: 10px !important;
    border-radius: 4px;
    min-width: 600px;
    background-color: white;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

export const TypographyStyled = styled(Typography)`
    padding-left: 24px;
    padding-right: 24px;
    min-height: 24px;
    border-bottom: 1px solid #d5d3d3;
`

export const Paragraph = styled(Typography)`
    padding: 40px;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    padding-top: 10px;
    border-top: 1px solid #d5d3d3;
`
