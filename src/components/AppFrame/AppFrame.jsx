import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'


const AppFrame = ({children}) => {
    const history = useHistory()

    const onClickVolver = useCallback(() => {
        history.push('/')
    }, [history]) 
    
    return (
        <Grid container
            justify="center">
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Grid container
                        direction="row"
                        justify="space-between"
                        alignItems="center"                
                        >
                            <Grid item>
                                <Typography variant="h6" color="inherit">
                                    Code Challenge MD Digital Solutions
                                </Typography>                            
                            </Grid>    
                            <Grid item>
                                <Button variant="contained" onClick={() => onClickVolver()}>
                                    Volver
                                </Button>                         
                            </Grid> 
                        </Grid>
                    </Toolbar>
                </AppBar>
            <Grid item
                xs={12}
                sm={12}
                md={11}
                lg={11}>
                    {children}
            </Grid>
        </Grid>
    )
}

AppFrame.propTypes = {
    children: PropTypes.node
}

export default AppFrame