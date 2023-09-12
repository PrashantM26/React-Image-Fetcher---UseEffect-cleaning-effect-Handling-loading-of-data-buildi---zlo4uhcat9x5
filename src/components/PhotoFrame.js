import React from 'react';

function PhotoFrame({ url, title }) {
    return (<div className="photoframe">
        <img src={url} alt={title}></img>
        <div className="caption">{title}</div>
    </div>);

}
export default PhotoFrame;
