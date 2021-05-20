import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import AppFrame from './../components/AppFrame'
import ShowData from './../components/ShowData'



const MainPage = ({data}) => {
    return (
        <AppFrame>
            <Paper elevation={3}>
                <ShowData data={data}>
                </ShowData>
            </Paper>
        </AppFrame>
    )
}

MainPage.propTypes = {
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
}

export default MainPage
