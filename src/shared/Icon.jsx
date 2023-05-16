import React from 'react'

function Icon({ size,color="black", ...rest }) {
  return (
    <i {...rest} style={{ fontSize: size,color:color }}></i>
  )
}

export default Icon