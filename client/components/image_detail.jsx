import React from 'react';
import ImageScore from './image_score';

const ImageDetail = ({ picture, title, description,beneficios },props) => {

  return (
    <li className='media list-group-item'>
      <div className='media-left'>
        <img src={picture} alt={title} />
      </div>
      <div className='media-body'>
        <h4 className='media-heading'>{title}</h4>
        <p>{description}</p>
        <p>{beneficios}</p>
        <ImageScore ups={props.ups} downs={props.downs}></ImageScore>
      </div>
    </li>
  );
};

export default ImageDetail;