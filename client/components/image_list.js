import React from "react";
import ImageDetail from "./image_detail";

const IMAGES = [
    {
        title:'Pen',
        link:'https://res.cloudinary.com/bertus/image/upload/v1715240112/AirPure/Dise%C3%B1o_sin_t%C3%ADtulo_1_kh25hn.gif',
    },
    {
        title:'Pine Tree',
        link:'https://res.cloudinary.com/bertus/image/upload/v1715240112/AirPure/Dise%C3%B1o_sin_t%C3%ADtulo_1_kh25hn.gif',
    },
    {
        title:'Mug',
        link:'https://res.cloudinary.com/bertus/image/upload/v1715240112/AirPure/Dise%C3%B1o_sin_t%C3%ADtulo_1_kh25hn.gif',
    }
];

const ImageList = () => {
const RenderedImages = IMAGES.map((image) =>{
    return <ImageDetail />
})

    return (
        <ul>
            {RenderedImages}
        </ul>
    );
};

export default ImageList;