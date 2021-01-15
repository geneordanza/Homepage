import React from 'react'

const BodyTemplate = ({ title, children }) => (
  <div className="p-3 p-lg-3 d-flex align-items-center">
    <div className="w-100">
      <h2 className="mt-2 text-center">{ title }</h2>
      <hr />

      { children }

    </div>
  </div>
)

export default BodyTemplate
