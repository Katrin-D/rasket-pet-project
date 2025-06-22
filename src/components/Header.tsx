"use client";

import React, { useState } from "react";
import Container from "./Container";
import Link from "next/link";
import { menuItems } from "@/data/menuItems";
import { HiBars3, HiOutlineXMark } from "react-icons/hi2";
import { AnimatePresence, motion } from "motion/react";
import Logo from "./Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed md:absolute top-0 left-0 right-0 z-50 w-full bg-transparent">
      <Container noPadding className="relative z-10">
        <nav className="flex justify-between items-center px-5 py-5 md:py-10 bg-white md:bg-transparent shadow-md md:shadow-none">
          {/* Logo */}
          <Logo />

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="text-foreground-muted hover:text-secondary transition-colors"
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/"
                className="text-black px-8 py-3 bg-primary hover:bg-primary-accent transition-colors rounded-full"
              >
                Get Started
              </Link>
            </li>
          </ul>

          {/* Mobile menu button*/}
          <div className="md:hidden">
            <button
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={toggleMenu}
              className="text-black px-2 py-2 bg-primary hover:bg-primary-accent transition-colors rounded-full"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
              ) : (
                <HiBars3 className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ bounce: 0 }}
            key="box"
            id="mobile-menu"
            className="md:hidden bg-white shadow-lg pt-6 pb-6 "
          >
            <Container>
              <ul className="flex flex-col space-y-5">
                {menuItems.map((item) => (
                  <li key={item.text}>
                    <Link
                      href={item.url}
                      onClick={toggleMenu}
                      className="text-foreground-muted hover:text-secondary transition-colors"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/"
                    onClick={toggleMenu}
                    className="text-black px-8 py-3 mt-4 bg-primary hover:bg-primary-accent transition-colors rounded-full block w-fit"
                  >
                    Get Started
                  </Link>
                </li>
              </ul>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Header;
