import React from 'react';
import './TrackItem.css';

const TrackItem = ({ track, index, onClick }) => {
    return (
        <div className="track-item" onClick={onClick}>
            <div className="track-number">{index + 1}.</div>
            <div className="track-info">
                <h3 className="track-title">{track.title}</h3>
                <p className="track-artist">{track.artist} <span className="track-year">({track.year})</span></p>
            </div>
            <div className="track-duration">{track.duration}</div>
        </div>
    );
};

export default TrackItem;
