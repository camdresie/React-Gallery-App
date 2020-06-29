import React, { Component } from 'react';

import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer = (props) => {
    console.log(props.data);
    const results = props.data;
    let photos;
    if (results.length > 0) {
        photos = results.map( photo => <Photo key={photo.id} /> );
    } else {
        photos = <NotFound />;
    }

        return(
            <div className="photo-container">
                <h2>Results</h2>
                {
                (props.loading)
                ? <h4>Loading...</h4>
                : <ul>
                    {photos}
                </ul>
                }
            </div>
        );
    }

export default PhotoContainer;