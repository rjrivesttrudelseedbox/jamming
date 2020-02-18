import React from 'react';
import Track from "../Track/Track";
import "./TrackList.css"

//<!-- You will add a map method that renders a set of Track components  -->

class TrackList extends React.Component {
    render = () => {
        return (
            <div className="TrackList">
                {
                this.props.searchResults.map((business) =>{
                    return <Track key={business.id} business={business} />
                })
                }
            </div>
        );
    }
}

export default TrackList;