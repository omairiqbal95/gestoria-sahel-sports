import React from 'react';

import config from '../config/index.json';

const Cricket = () => {
  const { cricket } = config;
  const { title, subtitle, description } = cricket;

  // Split the description into parts: main text and the signature
  const [mainDescription] = description.split('\n\nPresidente');

  return (
    <div className={`py-12 bg-background`} id="cricket">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className={`text-base text-primary font-semibold tracking-wide uppercase`}
          >
            {title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {subtitle}
          </p>

          {/* Main Description */}
          <p
            className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto whitespace-pre-line"
            style={{ whiteSpace: 'pre-line' }}
          >
            {mainDescription}
          </p>

          <p className="mt-4 max-w-2xl text-xl lg:mx-auto">
            <span className="text-red-600 font-bold">
              Ahmed Sardar Anwar Pervez
              <br />
              <br />
              Presidente
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cricket;
