import React from 'react'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import { withStyles } from '@material-ui/core/styles'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import DownArrow from '@material-ui/icons/ArrowDropDown'
import UpArrow from '@material-ui/icons/ArrowDropUp'
import FormatDate from './../FormatDate'
//material sacado de https://material-ui.com/es/components/tables/ y adaptado a la lógica del problema
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
      border: "1px solid grey",
    },
    body: {
      fontSize: 14,
      border: "1px solid grey",
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  

const ShowData = ({data, handleSort, columnToSort, sortDirection}) => {

    return (
        <div className="container-fluid py-1">
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>
                                <div onClick={() => {handleSort("author")}}>
                                    <span>
                                        Author
                                    </span>
                                    {
                                        columnToSort === "author" ? (
                                            sortDirection === "asc" ? (<UpArrow/>
                                                ) : (
                                             <DownArrow/>)
                                        ) : null
                                    }
                                </div>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <div onClick={() => {handleSort("title")}}>
                                    <span>
                                        Title
                                    </span>
                                    {
                                        columnToSort === "title" ? (
                                            sortDirection === "asc" ? (<UpArrow/>
                                                ) : (
                                             <DownArrow/>)
                                        ) : null
                                    }
                                </div>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <div onClick={() => {handleSort("description")}}>
                                    <span>
                                        Description
                                    </span>
                                    {
                                        columnToSort === "description" ? (
                                            sortDirection === "asc" ? (<UpArrow/>
                                                ) : (
                                             <DownArrow/>)
                                        ) : null
                                    }
                                </div>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <div onClick={() => {handleSort("category")}}>
                                    <span>
                                        Category
                                    </span>
                                    {
                                        columnToSort === "category" ? (
                                            sortDirection === "asc" ? (<UpArrow/>
                                                ) : (
                                             <DownArrow/>)
                                        ) : null
                                    }
                                </div>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <div onClick={() => {handleSort("published_at")}}>
                                    <span>
                                        Published at
                                    </span>
                                    {
                                        columnToSort === "published_at" ? (
                                            sortDirection === "asc" ? (<UpArrow/>
                                                ) : (
                                             <DownArrow/>)
                                        ) : null
                                    }
                                </div>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <div onClick={() => {handleSort("country")}}>
                                    <span>
                                        Country
                                    </span>
                                    {
                                        columnToSort === "country" ? (
                                            sortDirection === "asc" ? (<UpArrow/>
                                                ) : (
                                             <DownArrow/>)
                                        ) : null
                                    }
                                </div>
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((data, i) => (
                        <StyledTableRow key={i}>
                            <StyledTableCell component="th" scope="row">
                                {data.author}
                            </StyledTableCell>
                            <StyledTableCell align="right">{data.title}</StyledTableCell>
                            <StyledTableCell align="right">{data.description}</StyledTableCell>
                            <StyledTableCell align="right">{data.category}</StyledTableCell>
                            <StyledTableCell align="right">
                                <FormatDate date={data.published_at}>
                                </FormatDate>
                            </StyledTableCell>
                            <StyledTableCell align="right">{data.country}</StyledTableCell>     
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        
    )
}

ShowData.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            author: PropTypes.string,
            category: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            image: PropTypes.string,
            language: PropTypes.string.isRequired,
            published_at: PropTypes.string.isRequired,
            source: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
    handleSort: PropTypes.func.isRequired,
    columnToSort: PropTypes.string.isRequired,
    sortDirection: PropTypes.string.isRequired,
}

export default ShowData
