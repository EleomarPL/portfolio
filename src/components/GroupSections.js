import React from 'react';
import Contact from '../sections/Contact';
import Presentation from '../sections/Presentation';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';

const GroupSection = () => {
  return (
    <main>
      <Presentation />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default GroupSection;