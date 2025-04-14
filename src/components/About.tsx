import React from 'react';

import config from '../config/index.json';

const About = () => {
  const { company } = config;
  const { name: companyName } = company;

  return (
    <div
      id="about"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-x-4 mb-6">
          {' '}
          {/* Flex container for logos */}
          <img
            src="/assets/images/GestoriaSahel.png"
            alt={companyName}
            className="w-16 h-16 cursor-pointer"
            onClick={() => {
              window.location.href = 'https://gestoriasahel.com/';
            }}
          />
          <img
            src="/assets/images/CricketCatala.jpg"
            alt="Logo 2"
            className="w-16 h-16 cursor-pointer"
            onClick={() => {
              window.location.href = 'https://www.cricketcatala.com/';
            }}
          />
          <img
            src="/assets/images/SahelClubEsportiu.jpeg"
            alt="Logo 3"
            className="w-16 h-16 cursor-pointer"
            onClick={() => {
              window.location.href = 'https://www.clubesportiusahel.com/';
            }}
          />
        </div>

        <div className="flex items-center gap-x-6 mt-6 h-8">
          {' '}
          {/* Adjusted gap for better spacing */}
          {/* LinkedIn */}
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/company/gestoria-sahel"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                fill="#0077b5"
              />
            </svg>
          </a>
          {/* Facebook */}
          <a
            aria-label="Facebook"
            href="https://www.facebook.com/clubesportiusahel"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="w-6 h-6 hover:opacity-80"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="12" fill="#1877F2" />
              <path
                fill="#FFFFFF"
                d="M15.12 8.58h-1.32c-.34 0-.8.45-.8 1.05v1.25h2.1l-.34 2.34h-1.76V21h-2.55v-7.78H9.5v-2.34h1.26v-1.6c0-1.5.93-2.72 2.38-2.72h1.99v2.02z"
              />
            </svg>
          </a>
          {/* Instagram */}
          <a
            aria-label="Instagram"
            href="https://www.instagram.com/club.esportiu.sahel"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="w-6 h-6 hover:opacity-80"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <defs>
                <linearGradient
                  id="IG-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#f58529" />
                  <stop offset="30%" stopColor="#dd2a7b" />
                  <stop offset="60%" stopColor="#8134af" />
                  <stop offset="100%" stopColor="#515bd4" />
                </linearGradient>
              </defs>
              <path
                fill="url(#IG-gradient)"
                d="M12 2.2c3.2 0 3.6.01 4.9.07 3.3.15 4.8 1.7 4.9 4.9.06 1.3.07 1.6.07 4.9s-.01 3.6-.07 4.9c-.15 3.3-1.7 4.8-4.9 4.9-1.3.06-1.6.07-4.9.07s-3.6-.01-4.9-.07c-3.3-.15-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.3 2.2 12s.01-3.6.07-4.9C2.42 3.8 4 2.3 7.2 2.2 8.5 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3.01 7 .07 2.6.27.3 2.6.1 7 .04 8.3 0 8.7 0 12s.04 3.7.1 5c.2 4.4 2.5 6.7 6.9 6.9 1.3.06 1.7.1 5 .1s3.7-.04 5-.1c4.4-.2 6.7-2.5 6.9-6.9.06-1.3.1-1.7.1-5s-.04-3.7-.1-5C23.7 2.6 21.4.3 17 .1 15.7.04 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0z"
              />
            </svg>
          </a>
          {/* Twitter */}
          <a
            aria-label="Twitter"
            href="https://twitter.com/sahelgestoria"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="w-6 h-6 hover:text-primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 1227"
              fill="currentColor"
            >
              <path d="M714.77 585.75 1179.3 0H1072L660.74 531.73 309.49 0H0l487.85 698.47L20.7 1227h115.96l434.7-558.45 371.62 558.45H1200L714.77 585.75ZM634.74 655.63l-50.66 64.7-402.74 516.13H123.45l414.03-529.7 50.65-64.7L1074.95 96.75H1079L634.74 655.63Z" />
            </svg>
          </a>
          {/* YouTube */}
          <a
            aria-label="YouTube"
            href="https://www.youtube.com/@ahmedsardarbarcelona"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="w-6 h-6 hover:opacity-80"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="#FF0000"
                d="M23.498 6.186a2.988 2.988 0 0 0-2.104-2.112C19.719 3.5 12 3.5 12 3.5s-7.719 0-9.394.574a2.988 2.988 0 0 0-2.104 2.112A31.26 31.26 0 0 0 0 12a31.26 31.26 0 0 0 .502 5.814 2.988 2.988 0 0 0 2.104 2.112C4.281 20.5 12 20.5 12 20.5s7.719 0 9.394-.574a2.988 2.988 0 0 0 2.104-2.112A31.26 31.26 0 0 0 24 12a31.26 31.26 0 0 0-.502-5.814z"
              />
              <path fill="#fff" d="M9.75 15.5v-7l6 3.5-6 3.5z" />
            </svg>
          </a>
          {/* WhatsApp */}
          <a
            aria-label="WhatsApp"
            href="https://wa.me/34632727923"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="w-6 h-6 hover:opacity-80"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <circle cx="16" cy="16" r="16" fill="#25D366" />
              <image
                href="/assets/images/whatsapp.png"
                x="8"
                y="8"
                width="16"
                height="16"
              />
            </svg>
          </a>
          {/* Email */}
          <a
            aria-label="Email"
            href="mailto:info@gestoriasahel.com"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="w-6 h-6 hover:opacity-80"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="#EA4335"
                d="M467 61H45C20.2 61 0 81.2 0 106v300c0 24.8 20.2 45 45 45h422c24.8 0 45-20.2 45-45V106c0-24.8-20.2-45-45-45z"
              />
              <path
                fill="#FFF"
                d="M256 283L45 135v-29l211 148 211-148v29L256 283z"
              />
            </svg>
          </a>
        </div>
        <div className="flex flex-col items-center justify-center mt-6 text-center">
          <div className="mb-4">
            <p className="text-sm lg:text-base font-medium text-red-600 dark:text-red-500">
              Presidente: Ahmed Sardar
            </p>
            <p className="text-sm lg:text-base font-medium text-red-600 dark:text-red-500">
              Vicepresidente: Mohammed Sahel Rabhi
            </p>
            <p className="text-sm lg:text-base font-medium text-red-600 dark:text-red-500">
              Tesorero: Hussnain Sardar Anwar Pervez
            </p>
          </div>
          <p className="leading-none text-gray-900 dark:text-gray-50">
            <span className="text-xl lg:text-2xl text-red-600 font-semibold block">
              Tu esfuerzo, nuestro escudo.
            </span>
            <br />
            <span className="text-xs lg:text-sm block">
              Gestoria Barcelona Sahel © 2025
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
