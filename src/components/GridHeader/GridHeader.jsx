import React from 'react'
import Grid from '@material-ui/core/Grid'

const GridHeader = () => {
    return (
        <div className="container-fluid pt-5">
            <div className="row">
                <Grid container           
                direction="row"
                justify="center"
                alignItems="center">
                    <Grid className='col-2 divHeader' item>
                        Author
                    </Grid>
                    <Grid className='col-1 divHeader' item>
                        Category
                    </Grid>
                    <Grid className='col-1 divHeader' item>
                        Country
                    </Grid>
                    <Grid className='col-4 divHeader' item>
                        Description
                    </Grid>
                    <Grid className='col-1 divHeader' item>
                        Published_at
                    </Grid>
                    <Grid className='col-3 divHeader' item>
                        Title
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default GridHeader