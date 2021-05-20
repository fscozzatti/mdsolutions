import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'


const AppFrame = ({children}) => {
    
    return (
        <Grid container
            justify="center">
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit">
                        Code Challenge MD Digital Solutions
                    </Typography>
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