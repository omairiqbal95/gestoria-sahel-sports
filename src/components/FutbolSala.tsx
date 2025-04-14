import React from 'react';

import config from '../config/index.json';

const FutbolSala = () => {
  const { futbolSala } = config;
  const { title, subtitle, description } = futbolSala;

  // Split the description into parts: main text and the signature
  const [mainDescription] = description.split('\n\nPresidente');

  return (
    <div className={`py-12 bg-background`} id="futbolSala">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          {/* Title */}
          <h2
            className={`text-lg lg:text-xl text-primary font-semibold tracking-wide uppercase`}
          >
            {title}
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {subtitle}
          </p>

          {/* Main Description */}
          <p
            className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto whitespace-pre-line"
            style={{
              whiteSpace: 'pre-line',
              textAlign: 'justify', // Add this to justify the text
            }}
          >
            {mainDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FutbolSala;
