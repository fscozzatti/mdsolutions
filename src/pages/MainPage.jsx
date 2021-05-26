import React, { useCallback } from 'react'

import {useHistory} from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import AppFrame from './../components/AppFrame'


const MainPage = () => {
    const history = useHistory()

    const onClickHandlerR2r4 = useCallback(() => {
        history.push('/R2r4')
    }, [history]) 

    return (
        <AppFrame>
            <Paper elevation={3}>
                <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center" 
                    spacing={5}          
                >
                    <Grid item>
                        Welcome to challenge!!!
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={() => onClickHandlerR2r4()}> R2 y R4 </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary"> R3 </Button>
                    </Grid>
                </Grid>
            </Paper>
        </AppFrame>
    )
}

export default MainPage
