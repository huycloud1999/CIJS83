import React from 'react'

function Icon({ size, ...rest }) {
  return (
    <i {...rest} style={{ fontSize: size }}></i>
  )
}

export default Icon