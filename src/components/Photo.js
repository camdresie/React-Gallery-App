// Dependency import

import React from 'react';

/*************** 
* The Photo component takes in the url and title props from the PhotoContainer and renders individual photo
* elements based on the data in the arrays retrieved from Flickr.
****************/

const Photo = (props) => {
    return(
        <li>
            <img src={props.url} alt={props.title} />
        </li>
    );
}

export default Photo;