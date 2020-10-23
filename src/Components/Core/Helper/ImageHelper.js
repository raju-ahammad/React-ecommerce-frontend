import React from 'react'


const ImageHelper = ({product}) => {
    const imageUrl = product ? product.image : `https://www.pexels.com/photo/person-holding-black-slr-camera-2787216/`
    return (
        <div className="p-2">
            <img src={imageUrl} style={{maxHeight: "100%", maxWidth:"100%"}} className="mb-3 rounded" alt=""/>
        </div>
    )
}

export default ImageHelper
