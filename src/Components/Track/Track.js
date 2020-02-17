import React from 'react';
import './Track.css';

class Track extends React.Component {
    renderAction = () => {
        let isRemoval;

        if (isRemoval) {
            return '+'
        } else {
            return '-'
        }
    }
    
/*
<h3><!-- track name will go here --></h3>
                <p><!-- track artist will go here--> | <!-- track album will go here --></p>
*/

    render() {
        <div className="Track">
            <div className="Track-information">
                <h3>bob</h3>
                <p>bobobobo</p>
            </div>
    <button className="Track-action">{renderAction}</button>
        </div>
    }
}

export default Track;