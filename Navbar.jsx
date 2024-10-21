'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaMailBulk } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header 
      className="text-white bg-[#000319] sticky top-0 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex p-4 justify-between items-center">
        
        {/* Logo on the left side */}
        <motion.div 
          className="flex-shrink-0"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/logo.png"
            width={100}
            height={100}
            alt="Logo"
          />
        </motion.div>

        {/* Centered links and button */}
        <div className="flex-grow flex items-center justify-center space-x-6">
          {/* Page links for larger screens */}
          <motion.nav className="hidden md:flex items-center space-x-6 text-lg mt-2">
            <Link className="hover:text-purple-400 transition duration-300" href="/">Home</Link>
            <Link className="hover:text-purple-400 transition duration-300" href="/About">About</Link>
            <Link className="hover:text-purple-400 transition duration-300" href="/Portfolio">Portfolio</Link>
            <Link className="hover:text-purple-400 transition duration-300" href="/Services">Services</Link>
            <Link className="hover:text-purple-400 transition duration-300" href="/Contact">Contact Us</Link>
          </motion.nav>
          
          {/* Email button with a PaperPlane icon */}
          <Link href="mailto:info@virtualcrafterstek.com">
            <motion.button 
              className="bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-sm md:text-base transition duration-300 flex items-center"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <FaMailBulk size={20} className="text-white" />
            </motion.button>
          </Link>
        </div>

        {/* Hamburger icon for mobile view */}
        <motion.button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <FaBars size={24} />
        </motion.button>
      </div>

      {/* Mobile menu (visible only when toggled) */}
      {isOpen && (
        <motion.div
          className="md:hidden text-center bg-[#000319] p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Link className="block py-2 hover:text-purple-400 transition duration-300" href="/">Home</Link>
          <Link className="block py-2 hover:text-purple-400 transition duration-300" href="/About">About</Link>
          <Link className="block py-2 hover:text-purple-400 transition duration-300" href="/Portfolio">Portfolio</Link>
          <Link className="block py-2 hover:text-purple-400 transition duration-300" href="/Services">Services</Link>
          <Link className="block py-2 hover:text-purple-400 transition duration-300" href="/Contact">Contact Us</Link>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
