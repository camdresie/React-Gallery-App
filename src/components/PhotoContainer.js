import React from 'react';

import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer = (props) => {
    console.log(props.data);
    const results = props.data;
    let photos;
    if (results.length > 0) {
        photos = results.map( photo => <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`} key={photo.id} title={photo.title} /> )
    } else {
        photos = <NotFound />
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