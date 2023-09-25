import React from 'react';

export const PhotoFrame = ({title,url}) => {
   // if(!title) return;
  return(
    <div className="photoframe">
      <img src={url}/>
      <div className="caption">{title}</div>
    </div>
  )
}
