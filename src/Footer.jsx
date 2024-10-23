import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-cyan-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} T&CWeek.
        </div>
        
        <div className="mt-4 md:mt-0 flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
            <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/tycweektecsup/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
            <img src="https://cdn-icons-png.flaticon.com/512/124/124011.png" alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
