import React from 'react'
import Paper from '@material-ui/core/Paper'
import AppFrame from './../components/AppFrame'
import ShowVideo from './../components/ShowVideo'

const R3 = () => {
    return (
        <AppFrame>
            <Paper elevation={3}>
                <ShowVideo />
            </Paper>
        </AppFrame>
    )
}


export default R3
