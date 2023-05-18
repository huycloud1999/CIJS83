import React from 'react'

// props là 1 object 
function IconSizeBigger({ size = "16px",color="white", ...rest }) {



    return (
        <i {...rest} style={{ fontSize: size,color:color }}></i>
    )
}

export default IconSizeBigger