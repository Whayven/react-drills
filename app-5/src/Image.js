import React from 'react'

const Image = (props) => {
    // Using destructuring on props ~
    const { imageUrl } = props
    return (
        <img src={imageUrl} />
    )
}

export default Image