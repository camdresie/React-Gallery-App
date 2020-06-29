// Dependency Import

import React from 'react';

// Component Imports

import Photo from './Photo';
import NotFound from './NotFound';

/*************** 
* The PhotoContainer takes in props passed to it (depending on the Route) from App.js. The PhotoContainer first
* checks to ensure that there are items in the array to be rendered and then maps over the array, creating an 
* individual URL, key, and title for each photo to be passed to the Photo component as props. If there are no items
* in the array, then a user is told that their search returned no results. 
****************/

const PhotoContainer = (props) => {
    const results = props.data;
    let photos;
    if (results.length > 0) {
        photos = results.map( photo => <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`} key={photo.id} title={photo.title} /> )
    } else {
        photos = <NotFound />
    }

/*************** 
* This renders the UI for the user. It replaces the title if they click on one of the links and renders "Search
* Results" if they enter a custom search. It then displays the individual photo elements in photos in a gallery.
****************/

    return(
        <div className="photo-container">
            <h2>{props.title}</h2>
            <ul>
                {photos}
            </ul>
        </div>
    );
}

export default PhotoContainer;