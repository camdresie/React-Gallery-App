//  Dependency import

import React from 'react';

/*************** 
* If a user's search returns no results, the following will be rendered on the page.
****************/

const NotFound = () => {
    return(
        <li className="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
        </li>
    );
}

export default NotFound;