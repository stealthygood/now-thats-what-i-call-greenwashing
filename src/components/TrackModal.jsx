import React from 'react';
import './TrackModal.css';

const TrackModal = ({ track, onClose }) => {
    if (!track) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>NOW PLAYING: REALITY</h2>
                    <button className="close-btn" onClick={onClose}>X</button>
                </div>

                <div className="modal-body">
                    <h3 className="modal-track-title">{track.title}</h3>
                    <p className="modal-artist">by {track.artist}</p>

                    <div className="visualizer-container">
                        {track.audioEmbedUrl ? (
                            <iframe
                                src={track.audioEmbedUrl}
                                width="100%"
                                height="150"
                                frameBorder="0"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                title="Suno Embed"
                            ></iframe>
                        ) : (
                            <>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </>
                        )}
                    </div>

                    <div className="reality-check-card">
                        <h4>THE REAL STORY:</h4>
                        <p>{track.description}</p>

                        <div className="sources-box">
                            <strong>Source:</strong> {track.source}
                        </div>
                    </div>
                </div>

                <div className="modal-footer">
                    <button className="skip-ad-btn" onClick={onClose}>
                        YOU CAN'T SKIP THIS REALITY
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TrackModal;
