import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ReactPlayer from 'react-player'
import leccion from './../../images/Leccion.jfif'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';


const ShowVideo = () => {
    return (
            <div className= "container-fluid py-3">
                <Grid container 
                    spacing={3}
                >
                    <Grid item
                    xs={12}
                    sm={6}                    
                    >
                    <div class="container1">
                        <img src={leccion} width="100%" height="100%"></img>
                        <a>
                            <i class="fas fa-download" >
                                <PlayArrowIcon style={{ fontSize: 100 }} />
                            </i>
                        </a>
                    </div>
                    </Grid>
                    <Grid item xs={12}
                    sm container
                    direction="column"
                    justify="flex-start"
                    alignItems="stretch"
                    >
                        <div className="container-fluid py-5">
                            <Grid item
                            xs={12}
                            sm={12}                    
                            >
                                <Typography variant="h4">
                                    Lección de vida importante
                                </Typography>                          
                            </Grid>
                            <Grid item
                            xs={12}
                            sm={12}                     
                            >
                                <p variant="h1" color="black">Fragmento tomado de una película en la cual Will Smith le dice a su
                                 hijo un consejo muy importante, el cual queda retratado en este maravilloso video. Lorem Ipsum is simply dummy 
                                 text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                                 text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                                 a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                   containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum 
                                </p>                       
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </div>
    )
}


export default ShowVideo
