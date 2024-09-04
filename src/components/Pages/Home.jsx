import React from 'react';

function Home() {
  return (
    <main className="content">
      <h1>Welcome to Our Recipe Site</h1>
      <p>Find the best recipes and cooking videos here.</p>
      <div className="video-grid">
        <div className="video-item">
          <h3>Recipe Video 1</h3>
          <video controls>
            <source src="" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </main>
  );
}

export default Home;
