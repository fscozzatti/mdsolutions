import React from 'react'
import PropTypes from 'prop-types'
import GridHeader from './../GridHeader'

const ShowData = () => {

    return (
        <div>
            <GridHeader></GridHeader>
        </div>
    )
}

ShowData.propTypes = {
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

export default ShowData
