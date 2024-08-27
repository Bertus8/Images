import React from "react";
import ImageDetail from "./image_detail";

const ImageList = (props) => {
  const RenderedImages = props.images.map(image => {
    return (
      <ImageDetail 
        key={image.english_name} 
        picture={image.url_png} 
        title={image.english_name} 
        description={image.pose_description}
        beneficios={image.pose_benefits}
      />
    );
  });

  return (
    <ul>
      {RenderedImages}
    </ul>
  );
};

export default ImageList;