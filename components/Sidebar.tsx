
import React from 'react';
import { Linkedin, Github } from 'lucide-react';

export const Sidebar: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center bg-navy-panel rounded-[36px] shadow-soft py-10 px-6 relative overflow-hidden">
      {/* Profile Image */}
      <div className="relative mb-6 group cursor-pointer">
        <div className="w-48 h-48 rounded-full border-4 border-gray-600/50 p-1 shadow-lg transition-transform duration-500 group-hover:scale-105 group-hover:border-neon-green">
          <img
            src="https://res.cloudinary.com/dalmvzwgj/image/upload/v1763918198/image_jzslk8.jpg"
            alt="Profile"
            loading="eager"
            decoding="async"
            width={192}
            height={192}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="absolute bottom-2 right-4 w-6 h-6 bg-neon-green rounded-full border-4 border-navy-panel"></div>
      </div>

      {/* Name & Title */}
      <div className="text-center mb-8">
        <h1 className="font-heading font-bold text-4xl text-white mb-2 tracking-tight">
          Dharshanoj <br /> Thrishal
        </h1>
        <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10">
          <p className="font-sans font-light text-gray-300 text-sm tracking-widest uppercase">
            Web Developer
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 mt-4">
        <a
          href="https://www.linkedin.com/in/dharshanoj-thrishal/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/5 hover:bg-neon-green hover:text-navy-panel transition-all duration-300 group relative"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            LinkedIn
          </span>
        </a>
        <a
          href="https://github.com/Thrishal1105"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/5 hover:bg-neon-green hover:text-navy-panel transition-all duration-300 group relative"
          aria-label="GitHub"
        >
          <Github size={20} />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            GitHub
          </span>
        </a>
        <a
          href="https://www.hackerrank.com/profile/dharshanojthris1"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/5 hover:bg-neon-green hover:text-navy-panel transition-all duration-300 group relative"
          aria-label="HackerRank"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
          >
            <title>HackerRank</title>
            <path d="M0 0v24h24V0zm9.95 8.002h1.805c.061 0 .111.05.111.111v7.767c0 .061-.05.111-.11.111H9.95c-.061 0-.111-.05-.111-.11v-2.87H7.894v2.87c0 .06-.05.11-.11.11H5.976a.11.11 0 01-.11-.11V8.112c0-.06.05-.11.11-.11h1.806c.061 0 .11.05.11.11v2.869H9.84v-2.87c0-.06.05-.11.11-.11zm2.999 0h5.778c.061 0 .111.05.111.11v7.767a.11.11 0 01-.11.112h-5.78a.11.11 0 01-.11-.11V8.111c0-.06.05-.11.11-.11z" />
          </svg>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            HackerRank
          </span>
        </a>
        <a
          href="https://leetcode.com/u/Dharshanoj_Thrishal/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/5 hover:bg-neon-green hover:text-navy-panel transition-all duration-300 group relative"
          aria-label="LeetCode"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
          >
            <title>LeetCode</title>
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
          </svg>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            LeetCode
          </span>
        </a>
      </div>

      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-neon-green to-transparent opacity-50"></div>
    </div>
  );
};
