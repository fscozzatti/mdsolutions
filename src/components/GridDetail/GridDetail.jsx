import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import FormatDate from './../FormatDate'


const GridDetail = ({author, category, country, description, published_at, title}) => {
    
    return (
        <div className="container-fluid">
            <div className="row">
                <Grid
                container            
                direction="row"
                justify="flex-start"
                alignItems="center">
                        <Grid className='col-2 divDetail' item>
                            {author}
                        </Grid>
                        <Grid className='col-md-1 divDetail' item>
                            {category}
                        </Grid>
                        <Grid className='col-md-1 divDetail' item>
                            {country}          
                        </Grid>
                        <Grid className='col-md-4 divDetail' item>
                            {description}
                        </Grid>
                        <Grid className='col-md-1 divDetail' item>
                            <FormatDate date={published_at}></FormatDate>
                        </Grid>
                        <Grid className='col-md-3 divDetail' item>
                            {title}
                        </Grid>
                </Grid>
            </div>
        </div>

    )
}

GridDetail.propTypes = {
    author: PropTypes.string,
    category: PropTypes.string,
    country: PropTypes.string,
    description: PropTypes.string,
    published_at: PropTypes.string,
    title: PropTypes.string,
}

export default GridDetail
