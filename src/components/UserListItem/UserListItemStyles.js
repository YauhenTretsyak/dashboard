import {styled as styledMui} from '@mui/material/styles'
import styled from 'styled-components'
import TableCell, {tableCellClasses} from '@mui/material/TableCell'
import TableRow, {tableRowClasses} from '@mui/material/TableRow'

export const StyledTableCell = styledMui(TableCell)(() => ({
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  export const StyledTableRow = styledMui(TableRow)(({theme, isTableHeader}) => ({
    [`&.${tableRowClasses.head}`]: {
      backgroundColor: isTableHeader ? 
        theme.palette.common.greyLight :
        theme.palette.common.white,
      color: theme.palette.common.white,
    },
  }));
export const ButtonsContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 12%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transform: translateY(-50%);
`
