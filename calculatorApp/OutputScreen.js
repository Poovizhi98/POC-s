// Import React (Mandatory Step). 
import React from 'react';
import OutputScreenRow from './OutputScreenRow.js';
// Use to hold two Screen Rows. 
const OutputScreen = (props) => {
    return (
        <div className="screen">
            <OutputScreenRow value={props.question} />
            <OutputScreenRow value={props.answer} />
        </div>
    )
}
export default OutputScreen; 
