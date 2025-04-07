import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-[#faf7f2] mt-auto py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img
              src="/rys-200.png"
              alt="RYS 200 Yoga Alliance Certification"
              className="h-16 w-auto"
            />
            <img
              src="/e-ryt-500.png"
              alt="E-RYT 500 Yoga Alliance Certification"
              className="h-16 w-auto"
            />
            <img
              src="/yacep.png"
              alt="YACEP Yoga Alliance Certification"
              className="h-16 w-auto"
            />
          </div>
          <p className="text-sm text-gray-600 text-center">
            © {new Date().getFullYear()} Gheranda Institute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};