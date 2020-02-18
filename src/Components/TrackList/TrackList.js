import React from 'react';
import Track from "../Track/Track";
import "./TrackList.css"

//<!-- You wilgyukl add a map method that renders a set of Track components  -->

/*{
                this.props.searchResults.map(result =>{
                    return <Track key={result.id} result={result} />
                })
                }*/

class TrackList extends React.Component {
    render = () => {
        return (
            <div className="TrackList">
                <Track searchResults={this.props.searchResults}/>
            </div>
        );
    }
}

export default TrackList;