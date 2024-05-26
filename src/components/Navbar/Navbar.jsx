"use client";

import Link from "next/link";
import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <header>
        <div className="logo-name-search-bar">
          <div className="logo-name">
            <img src="/imgs/logo crack.tv.png" alt="logo crack.tv" />
          </div>
        </div>

        <div className="logo-name">
          <img src="/imgs/logo crack.tv.png" alt="logo de Chuan" />
          <h1>crack.tv</h1>
        </div>

        <nav className="nav-pas-response" id="nav-pas-response">
          <Link href="/">Accueil</Link>
          <Link href="#">Séries</Link>
          <Link href="#">Films</Link>
          <Link href="#">Ajoutés récemment</Link>
          <Link href="#">Mes favoris</Link>
        </nav>

        <nav className="nav-response" id="nav-bar">
          <span className="material-symbols-outlined">home</span>
          <div id="home-text" className="hover-text">
            Accueil
          </div>

          <span className="material-symbols-outlined">movie</span>
          <div id="login-text" className="hover-text">
            Séries
          </div>

          <span className="material-symbols-outlined">videocam</span>
          <div id="groups-text" className="hover-text">
            Films
          </div>

          <span className="material-symbols-outlined">add_a_photo</span>
          <div id="credit-card-text" className="hover-text">
            Ajoutés récemment
          </div>

          <span className="material-symbols-outlined">star</span>
          <div id="contact-mail-text" className="hover-text">
            Mes favoris
          </div>
        </nav>
      </header>
    </>
  );
}
