import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ReactPlayer from 'react-player'
import AppFrame from './../components/AppFrame'




const R3 = () => {
    return (
        <AppFrame>
            <Paper elevation={3}>
                <div className= "container-fluid py-3">
                    <Grid container 
                        spacing={3}
                    >
                        <Grid item
                        xs={12}
                        sm={6}                    
                        >
                            <ReactPlayer url='https://www.youtube.com/watch?v=PABq5NEMhuU&ab_channel=RODOLFOROBLEDORODOLFOROBLEDO'
                            width='100%'
                            height='100%'
                            controls
                            muted
                            />
                        </Grid>
                        <Grid item xs={12}
                        sm container
                        direction="column"
                        justify="flex-start"
                        alignItems="strech"
                        >
                            <div className="container-fluid py-5">
                                <Grid item
                                xs={12}
                                sm={6}                    
                                >
                                    <Typography variant="h4">
                                        Lección de vida importante
                                    </Typography>                          
                                </Grid>
                                <Grid item
                                xs={12}
                                sm={6}                     
                                >
                                    <p variant="h1" color="black">Fragmento tomado de una película en la cual Will Smith le dice a su hijo un consejo muy importante, el cual queda retratado en este maravilloso video</p>                        
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Paper>
        </AppFrame>
    )
}


export default R3
