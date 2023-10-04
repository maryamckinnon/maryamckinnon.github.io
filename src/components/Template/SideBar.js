import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpeg`} alt="" style={{ justifyContent: 'center' }} />
      </Link>
      <header>
        <h2>Mary McKinnon</h2>
        <p><a href="mailto:maryamckinnon@gmail.com">maryamckinnon@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Mary!🖐 I&apos;m a full-stack software engineer who enjoys learning
        and understanding how things work. I am a Hack Reactor, Arcadia, and Penn State alumna.
        What excites me most about software engineering is the possibility of having a
        positive impact on society.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>
    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Mary McKinnon - 2022</p>
    </section>
  </section>
);

export default SideBar;
