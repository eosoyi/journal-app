import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import React from 'react';

interface ImageGalleryProps {
    images: []
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
    return (
        <ImageList sx={{ width: '100%', height: 500 }} cols={4} rowHeight={200}>
            {images.map((image, index) => (
                <ImageListItem key={image}>
                    <img
                        srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${image}?w=164&h=164&fit=crop&auto=format`}
                        alt={`imagen ${index} de la nota`}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}