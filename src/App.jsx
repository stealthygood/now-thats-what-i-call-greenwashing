
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import TrackList from './components/TrackList';
import TrackModal from './components/TrackModal';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

const TRACKS = [
  {
    id: 1,
    title: "We'll Recycle Everything (We Promise This Time)",
    artist: "The Pledge Bros",
    year: "1990",
    duration: "3:42",
    description: "In 1990, Coca-Cola pledged to use 25% recycled content in their bottles. That promise quietly disappeared. They made similar pledges in 2000, 2010, and 2020. Each time, they failed to meet them. Why recycle when virgin plastic is cheaper?",
    source: "Break Free From Plastic & TalkingTrash.com",
    audioEmbedUrl: "https://suno.com/embed/87b771d1-8153-4f67-94ee-3e8296fb8711"
  },
  {
    id: 2,
    title: "PlantBottle Fantasy",
    artist: "The Greenwash Collective",
    year: "2009",
    duration: "2:15",
    description: "Coca-Cola launched the 'PlantBottle' claiming it was eco-friendly. In reality, it was still up to 70% petroleum-based plastic and indistinguishable from regular PET in oceans. It was a marketing stunt, not a solution.",
    source: "The Guardian",
    audioEmbedUrl: "https://suno.com/embed/db1c1c7a-971e-437d-bcb5-bf88cb60a9c7"
  },
  {
    id: 3,
    title: "World Without Waste (LOL)",
    artist: "The 2030 Dreamers",
    year: "2018",
    duration: "4:01",
    description: "Coke's 'World Without Waste' campaign promises to collect one bottle for every one sold by 2030. Independent audits show they are nowhere close to this goal, while their plastic production actually INCREASED.",
    source: "Reuters Investigation",
    audioEmbedUrl: "https://suno.com/embed/3b212721-4ce0-4b6a-86b7-cf9f4e8d4d90"
  },
  {
    id: 4,
    title: "#1 With A Bullet (Point)",
    artist: "Break Free From Plastic ft. Reality Check",
    year: "2019-2023",
    duration: "5:00",
    description: "For five consecutive years, the Break Free From Plastic global brand audit has named Coca-Cola the world's #1 plastic polluter, producing more waste than the next two top polluters (PepsiCo and Nestle) combined.",
    source: "Break Free From Plastic Global Brand Audit"
  },
  {
    id: 5,
    title: "Fighting Bottle Bills (While Smiling)",
    artist: "The Lobby Boys",
    year: "Ongoing",
    duration: "∞",
    description: "While publicly promoting recycling, Coca-Cola has spent millions lobbying against Bottle Bills (Deposit Return Schemes) which are proven to increase recycling rates. They claim to support sustainability while funding groups that fight regulation.",
    source: "The Intercept",
    audioEmbedUrl: "https://suno.com/embed/ba25fc16-dbda-4009-bc06-e32cb06ca8f3"
  }
];

function App() {
  const [loading, setLoading] = useState(true);
  const [selectedTrack, setSelectedTrack] = useState(null);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const handleTrackClick = (track) => {
    setSelectedTrack(track);
  };

  const handleCloseModal = () => {
    setSelectedTrack(null);
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="app-container">
      <div className="cd-case">
        <div className="cd-spine">
          <span className="cd-spine-text">NOW THAT'S WHAT I CALL GREENWASHING 34</span>
        </div>

        <div className="cd-content">
          <Hero />
          <TrackList tracks={TRACKS} onTrackClick={handleTrackClick} />
          <CallToAction />
          <Footer />
        </div>
      </div>

      {selectedTrack && (
        <TrackModal track={selectedTrack} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
