import React from 'react'
import { Helmet } from 'react-helmet'

const Error404 = () => {
  return (
    <div className='active'>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      404
    </div>
  )
}

export default Error404
