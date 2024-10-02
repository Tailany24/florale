// src/app/home/navbar.js
"use client"; // Adiciona esta linha para tornar o componente um Client Component

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'; // Importa o componente Link do Next.js
const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="max-width">
          <div className="logo">
            <a>
              <img src="../img/icon.png" alt="Florale Logo" width="120" />
            </a>
          </div>
          <div className="menu-btn" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <ul className={`menu ${menuActive ? 'active' : ''}`}>
            <li>
              <Link href="/" className="menu-item">Home</Link>
            </li>
            <li>
              <Link href="/sobre" className="menu-item">Sobre</Link>
            </li>
            <li>
              <Link href="/contato" className="menu-item">Contato</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
