import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const About = () => (
  <Main
    title="About"
    description="Learn about Mary McKinnon"
  >
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/about">About Me</Link></h2>
        </div>
      </header>
      <h1>Intro</h1>
      <p>
        I am a full-stack software engineer, currently working at a
        social health/ad tech company. My professional journey has
        been a blend of diverse experiences, as I was a physical therapist
        prior to transitioning into software engineering. As a curious and driven person,
        I enjoy delving into the inner workings of complex systems, a trait
        that drew me naturally to software engineering. This innate passion
        for understanding and problem-solving fuels my enthusiasm to continuously
        learn and grow within the tech space.
      </p>
      <br />
      <p>
        My transition to software engineering is underpinned by a deep-seated commitment
        to driving positive change on a larger scale. I believe that technology holds the
        key to revolutionizing the realms of health, wellness, and social impact. This
        belief keeps me excited about the endless possibilities that software engineering
        brings to these fields.
      </p>
      <h1>When not coding, I enjoy</h1>
      <ul>
        <li>hiking</li>
        <li>meditation</li>
        <li>long walks exploring San Francisco</li>
        <li>
          puzzles of any kind (some favorites are Wordle/Octordle, jigsaw puzzles,
          and Soduko)
        </li>
        <li>cycling</li>
        <li>being near large bodies of water</li>
        <li>
          listening to podcasts (Hidden Brain, We Can Do Hard Things, The Heal
          Podcast, Radiolab)
        </li>
      </ul>
      <h1>I dream of</h1>
      <ul>
        <li>having  positive impact on the world.</li>
        <li>being a better version of myself daily.</li>
        <li>continuing my journey of lifelong learning.</li>
      </ul>
    </article>
  </Main>
);

export default About;
