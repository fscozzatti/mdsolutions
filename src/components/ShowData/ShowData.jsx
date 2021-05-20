import React from 'react'
import PropTypes from 'prop-types'
import GridHeader from './../GridHeader'
import GridDetail from './../GridDetail'

const ShowData = ({data}) => {

    const data2 = data && data.map((data, i) => {
        return (
          <div key={i}>
            <GridDetail author={data.author} category={data.category} country={data.country} 
             description={data.description} published_at={data.published_at} title={data.title} >
            </GridDetail>
          </div>
        )
      })

    return (
        <div>
            <GridHeader></GridHeader>
            <div className="col-12">{ data2 }</div>
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
