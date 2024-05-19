import React, { useEffect, useState } from 'react';

import { getImageOf } from "./Utils";
import { IMAGE_TYPES } from './Constants';

interface ImageRendererProps {
    imageType: IMAGE_TYPES;
    width?: number;
    height?: number;
}

export function ImageRenderer(props: ImageRendererProps) {
    const [currentImageSrc, setCurrentImageSrc] = useState('');
    useEffect(() => {
        getImageOf(props.imageType).then(imageRef => setCurrentImageSrc(imageRef));
    }, []);

    return (
        <div className='image-container'>
            <h1>Here's a random dog for you</h1>
            <div className='image-render-container'>
                <img src={currentImageSrc} />
            </div>
        </div>
    );
}