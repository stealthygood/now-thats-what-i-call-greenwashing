import React from 'react';
import TrackItem from './TrackItem';
import './TrackList.css';

const TrackList = ({ tracks, onTrackClick }) => {
    return (
        <div className="track-list-container">
            <h2 className="track-list-header">TRACK LISTING</h2>
            <div className="track-list">
                {tracks.map((track, index) => (
                    <TrackItem
                        key={track.id}
                        track={track}
                        index={index}
                        onClick={() => onTrackClick(track)}
                    />
                ))}
            </div>

        </div>
    );
};

export default TrackList;
