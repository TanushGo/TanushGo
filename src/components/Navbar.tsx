'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { ModeToggle } from "./ModeToggle";

interface UserInfo {
    name: string;
    designation: string;
    socialLinks: {
        linkedin: string;
        github: string;
    };
}

export default function Navbar({ userInfo }: { userInfo: UserInfo }) {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    const observerOptions = {
      threshold: 0.5,
      rootMargin: "-50% 0px -50% 0px"
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => sectionObserver.observe(section));

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => sectionObserver.unobserve(section));
    };
  }, []);
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg py-2' 
        : 'bg-white dark:bg-gray-900 py-4'
    }`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <div>
            <Link href="/">
              <h1 className="text-xl font-bold">{userInfo.name}</h1>
              <p className="text-base font-light text-gray-500 dark:text-gray-300">
                {userInfo.designation}
              </p>
            </Link>
        </div>
        <div className="space-x-8 hidden md:block">
          <Link
            href="#about"
            className={`text-base ${activeSection === "about" ? "text-gray-800 font-bold dark:text-gray-400" : "text-gray-600 dark:text-gray-300 font-normal"}`}
          >
            About
          </Link>
          <Link
            href="#projects"
            className={`text-base ${activeSection === "projects" ? "text-gray-800 font-bold dark:text-gray-400" : "text-gray-600 dark:text-gray-300 font-normal"}`}
          >
            Projects
          </Link>
          <Link
            href="#experience"
            className={`text-base ${activeSection === "experience" ? "text-gray-800 font-bold dark:text-gray-400" : "text-gray-600 dark:text-gray-300 font-normal"}`}
          >
            Experience
          </Link>
          <Link
            href="#contact"
            className={`text-base ${activeSection === "contact" ? "text-gray-800 font-bold dark:text-gray-400" : "text-gray-600 dark:text-gray-300 font-normal"}`}
          >
            Contact
          </Link>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
}
