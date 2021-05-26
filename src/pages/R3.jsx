import React from 'react'
import Paper from '@material-ui/core/Paper'
import AppFrame from './../components/AppFrame'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'




const R3 = () => {
    return (
        <AppFrame>
            <Paper elevation={3}>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center" 
                    spacing={3}
                >
                    <Grid item
                    xs={12}
                    sm={6}                    
                    >

                    </Grid>
                    <Grid item xs={12}
                     sm container
                     direction="column"
                     spacing={3}
                     >
                        <Grid item
                        xs={12}
                        sm={6}                    
                        >
                            <Typography variant="h4" color="black">
                                Lección de vida importante
                            </Typography>                          
                        </Grid>
                        <Grid item
                        xs={12}
                        sm={6}                     
                        >
                            <p variant="h1" color="black">Fragmento tomado de una película en la cual Will Smith
                            le dice a su hijo un consejo muy importante, el cual queda retratado en este maravilloso video</p>                        
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </AppFrame>
    )
}


export default R3
